
import { error, type Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

import {
    SMTP_SERVER,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    SMTP_FROM,
    SMTP_PORT,
    SMTP_RCPT,
    SMTP_SUBJECT,
    HCAPTCHA_SECRET_KEY,
    HCAPTCHA_VERIFY_API
} from '$env/static/private';

export const actions: Actions = {
    default: async (event) => {

        const data = await event.request.formData();
        
        const hcaptchaResponse = data.get('hcaptchaResponse');
        data.delete('hcaptchaResponse');

        if (!hcaptchaResponse) {
            throw error(401, 'Bad captcha');
        }

        const hcaptchaBody = new FormData();

        hcaptchaBody.append('secret', HCAPTCHA_SECRET_KEY);
        hcaptchaBody.append('response', hcaptchaResponse);

        const response = await fetch(HCAPTCHA_VERIFY_API, {
            method: 'POST',
            body: hcaptchaBody,
        });

        const hcaptchaStatus = await response.json();

        if (!hcaptchaStatus.success) {
            throw error(401, 'Bad captcha');
        }

        const html = Array.from(data.entries()).map(
            ([key, value]) => {
                if (key === 'message') {
                    return `<br><br>${value}`;
                } else {
                    return `<b>${key[0].toUpperCase() + key.slice(1)}</b>: ${value}<br>`;
                }
            }
        ).join('\n');
        
        const fromName = data.get('name') || 'Contact Form';

        const transport = nodemailer.createTransport({
            host: SMTP_SERVER,
            port: Number(SMTP_PORT),
            secure: true,
            authMethod: 'LOGIN',
            auth: {
                user: SMTP_USERNAME,
                pass: SMTP_PASSWORD,
            }
        });

        await new Promise(
            (resolve, reject) => {
                transport.sendMail({
                    from: `${fromName} <${SMTP_FROM}>`,
                    to: SMTP_RCPT,
                    subject: SMTP_SUBJECT,
                    headers: {
                        'Reply-To': data.get('email')?.toString() || SMTP_FROM,
                    },
                    html,
                }, (err, info) => {
                    if (err) reject(err);
                    resolve(info);
                })
            }
        ).catch(
            (e) => { console.log(e); throw error(500, 'Server error') }
        );
    }
}