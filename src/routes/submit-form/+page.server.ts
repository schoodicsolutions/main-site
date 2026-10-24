import { error, type Actions } from '@sveltejs/kit';

import { createTransport } from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

import { env } from '$env/dynamic/private';

const validateCaptcha = (token: string) => {
	const hcaptchaBody = new FormData();

	hcaptchaBody.append('secret', env.HCAPTCHA_SECRET_KEY ?? '');
	hcaptchaBody.append('response', token);

	return fetch(env.HCAPTCHA_VERIFY_API ?? 'https://api.hcaptcha.com/siteverify', {
		method: 'POST',
		body: hcaptchaBody,
	}).then((res) => res.json());
};

const sendMailPromise = (mailOptions: Mail.Options) => {
	const transport = createTransport({
		host: env.SMTP_SERVER,
		port: Number(env.SMTP_PORT),
		authMethod: 'LOGIN',
		auth: {
			user: env.SMTP_USERNAME,
			pass: env.SMTP_PASSWORD,
		},
	});

	return new Promise<SMTPTransport.SentMessageInfo>((resolve, reject) => {
		transport.sendMail(mailOptions, (err, info) => {
			if (err) reject(err);
			resolve(info);
		});
	});
};

const escapeHtml = (value: string) =>
	value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const hcaptchaResponse = data.get('hcaptchaResponse');
		data.delete('hcaptchaResponse');

		if (!hcaptchaResponse) {
			throw error(401, 'Bad captcha');
		}

		const hcaptchaStatus = await validateCaptcha(hcaptchaResponse.toString());

		if (!hcaptchaStatus.success) {
			throw error(401, 'Bad captcha');
		}

		const html = Array.from(data.entries())
			.map(([key, value]) => {
				const safeValue = escapeHtml(value.toString());
				if (key === 'message') {
					return `<br><br>${safeValue.replace(/\n/g, '<br>')}`;
				} else {
					return `<b>${escapeHtml(key[0].toUpperCase() + key.slice(1))}</b>: ${safeValue}<br>`;
				}
			})
			.join('\n');

		const fromName = data.get('name')?.toString() || 'Contact Form';
		const replyToAddress = data.get('email')?.toString() || env.SMTP_FROM;

		await sendMailPromise({
			from: `${fromName} <${env.SMTP_FROM}>`,
			to: env.SMTP_RCPT,
			subject: env.SMTP_SUBJECT,
			headers: {
				'Reply-To': `${fromName} <${replyToAddress}>`,
			},
			html,
		}).catch((e) => {
			console.log(e);
			throw error(500, 'Server Error');
		});
	},
};
