import { STATICFORMS_API } from '$env/static/private'
import { error, type Actions, type HttpError } from '@sveltejs/kit';

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();

        data.append('_subject', 'Contact form from schoodic.io')

        const email = data.get('email');
        if (email) {
            data.append('_replyTo', email);
        }

        const response = await fetch(STATICFORMS_API, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: data,
        });

        if (response.status >= 400) {
            throw error(500, 'Server error')
        }
    }
}