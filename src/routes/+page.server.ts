import { SMTP_SERVER, SMTP_USERNAME, SMTP_PASSWORD, SMTP_FROM, SMTP_PORT, SMTP_RCPT, SMTP_SUBJECT } from '$env/static/private'
import nodemailer from 'nodemailer';
import { error, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
    default: async (event) => {

        const data = await event.request.formData();

        const html = Array.from(data.entries()).map(
            ([key, value]) => {
                if (key === 'message') {
                    return `<br><br>${value}`;
                } else {
                    return `<b>${key[0].toUpperCase() + key.slice(1)}</b>: ${value}<br>`;
                }
            }
        ).join('\n');

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
                    from: SMTP_FROM,
                    to: SMTP_RCPT,
                    subject: SMTP_SUBJECT,
                    headers: {
                        'Reply-To': SMTP_FROM,
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