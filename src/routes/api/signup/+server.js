import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function POST({ request }) {
	let { name, email, password} = await request.json();
	console.log(
		'username:',
		name,
		' | email:',
		email,
		' | password:',
		password
	);
	try {
		let res = await fetch('http://localhost:4000/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, password })
		});
		let data = await res.json();
		console.log("Signup Data: ", data);
		if (res.ok) {
			console.log('Signup  server response: ', data);
			return json(res.status);
		} else {
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.error('[SIGNUP ] CRITICAL ERROR', err);
		error(500, {
			title: 'Error loading Movies',
			message: 'There was an error loading the movies and we Cannot retrieve movie information.',
			info: 'Please try again later.'
		});
	}
}
