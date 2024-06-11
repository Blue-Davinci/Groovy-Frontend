import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { tokenSchema, passwordSchema } from '$lib/utils/auth.js';
import { VITE_API_BASE_URL } from '$env/static/private';
import { z } from 'zod';

const emailSchema = z
	.string({ required_error: 'An Email is required' })
	.email({ message: 'The Email must be a valid email address' });

export async function POST({ request }) {
	//ok
	let req = await request.json();
	let email = req.email;
	console.log('obtained data');
	try {
		const result = emailSchema.parse(req.email);
		console.log('Token Zod:', result);
	} catch (err) {
		const fieldErrors = err.flatten();
		return json({ error: fieldErrors.formErrors }, { status: 400 });
	}

	try {
		let res = await fetch(`${VITE_API_BASE_URL}/tokens/password-reset`, {
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: email })
		});
		let data = await res.json();
		if (res.ok) {
			return json(data);
		} else {
			console.log('we got an issue: ', data.error);
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.error('[PSW RESET] CRITICAL ERROR', err);
		error(500, {
			title: 'Error resetting your password',
			message: 'There was an error reseting your password.',
			info: 'Please try again later.'
		});
	}
}

export async function PUT({ request }) {
	let req = await request.json();
	let token = req.token;
	let password = req.password;
	try {
		const result = tokenSchema.parse(token);
		const result2 = passwordSchema.parse(password);
		console.log('Token Zod:', result, result2);
	} catch (err) {
		const fieldErrors = err.flatten();
		console.log(fieldErrors);
		return json({ error: fieldErrors.formErrors }, { status: 400 });
	}

	try{
        const res = await fetch(`${VITE_API_BASE_URL}/users/password`, {
            method: 'PUT',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token, password: password })
        });
        if (res.ok){
            let data = await res.json();
            return json(data);
        }else{
            let data = await res.json();
            console.log('we got an issue: ', data.error);
            return json({ error: data.error }, { status: res.status });
        }
    }catch(err){
        console.error('[PSW UPDATE] CRITICAL ERROR', err);
		error(500, {
			title: 'Error updating your password',
			message: 'There was an error updating your password.',
			info: 'Please try again later.'
		});
    }
}
