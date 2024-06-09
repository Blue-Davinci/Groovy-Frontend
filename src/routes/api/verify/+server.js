//get the token from the body;
//send the token to the backend at http://localhost:4000/v1/users/activated
//get the data and return it back
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
export async function PUT({ request }) {
	const { token } = await request.json();
	console.log('>>>Token: ', token);
	try {
		let res = await fetch('http://localhost:4000/v1/users/activated', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token })
		});
		if (res.ok) {
			let data = await res.json();
			return json(data);
		} else {
			let data = await res.json();
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.error('[Login Load] CRITICAL ERROR', err);
		error(500, {
			title: 'Error loading Movies',
			message: 'There was an error loading the movies and we Cannot retrieve movie information.',
			info: 'Please try again later.'
		});
	}
}
