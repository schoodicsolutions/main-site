import { error, fail, type Actions } from '@sveltejs/kit';
import { createTransport } from 'nodemailer';
import { env } from '$env/dynamic/private';
import { emailPattern, phonePattern } from '$lib/constants';

const verifyCaptcha = async (token: string) => {
	const body = new FormData();
	body.append('secret', env.HCAPTCHA_SECRET_KEY ?? '');
	body.append('response', token);

	const res = await fetch(env.HCAPTCHA_VERIFY_API ?? 'https://api.hcaptcha.com/siteverify', {
		method: 'POST',
		body,
	});
	const { success } = (await res.json()) as { success: boolean };
	return success;
};

const escapeHtml = (value: string) =>
	value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const field = (key: string) => data.get(key)?.toString().trim() ?? '';

		const name = field('name');
		const email = field('email');
		const phone = field('phone');
		const company = field('company');
		const message = field('message');
		const interests = data.getAll('interests').map(String);
		const token = field('h-captcha-response');

		if (!name || !emailPattern.test(email) || !message || (phone && !phonePattern.test(phone))) {
			return fail(400, { reason: 'invalid' });
		}

		if (!token || !(await verifyCaptcha(token))) {
			return fail(400, { reason: 'captcha' });
		}

		const details: [string, string][] = [
			['Name', name],
			['Email', email],
			['Phone', phone],
			['Organization', company],
			['Interested in', interests.join(', ')],
		];
		const filled = details.filter(([, value]) => value);

		const html = [
			...filled.map(([label, value]) => `<b>${label}</b>: ${escapeHtml(value)}<br>`),
			`<br>${escapeHtml(message).replace(/\n/g, '<br>')}`,
		].join('\n');
		const text = [...filled.map(([label, value]) => `${label}: ${value}`), '', message].join('\n');

		const transport = createTransport({
			host: env.SMTP_SERVER,
			port: Number(env.SMTP_PORT),
			authMethod: 'LOGIN',
			auth: { user: env.SMTP_USERNAME, pass: env.SMTP_PASSWORD },
		});

		try {
			await transport.sendMail({
				from: { name, address: env.SMTP_FROM ?? '' },
				replyTo: { name, address: email },
				to: env.SMTP_RCPT,
				subject: env.SMTP_SUBJECT,
				html,
				text,
			});
		} catch (e) {
			console.error(e);
			error(500, 'Server Error');
		}

		return { success: true };
	},
};
