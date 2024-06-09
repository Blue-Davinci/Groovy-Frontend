import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import {VITE_API_BASE_URL} from '$env/static/private';
export async function POST({ request, cookies, locals }) {
	let { email, password } = await request.json();
	console.log('username:', email, ' | password:', password);
	try {
		let res = await fetch(`${VITE_API_BASE_URL}/tokens/authentication`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		let data = await res.json();
		console.log("Login server.js: ", data);
		if (res.ok) {
			//return only the status code and set the body
			cookies.set('authtoken', data.authentication_token.token, {
				path: '/',
				expires: new Date(data.authentication_token.expiry)
			});
			//set the locals as well
			locals.user = true;
			// return
			return json(res.status);
		} else {
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.error('[Login Load] CRITICAL ERROR', err);
		error(500,{
			title: "Error loading Movies",
			message : "There was an error loading the movies and we Cannot retrieve movie information.",
			info: "Please try again later."
		})
	}
	}
