import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import {VITE_API_BASE_URL} from '$env/static/private';
//import { error } from '@sveltejs/kit';


// This will handle of requests for either a single movie
// Or a whole loaf of them.
export async function GET({ cookies, url }) {
	// get the cookie from the request and retrieve the token otherwise
	// get parameters from the request
	// redirect to the login page
	// if ID is provided in the body format the request to:
	// http://localhost:4000/v1/movies/{id} else we format it to
	// http://localhost:4000/v1/movies
	// get the data and return it as usual
	let authtoken = cookies.get('authtoken');
	//console.log('>>>> Authtoken: ', authtoken);

	let id = url.searchParams.get('id');
	let movieurl = id ? `${VITE_API_BASE_URL}/movies/${id}` : `${VITE_API_BASE_URL}/movies`;
	console.log("Current Env Used: ", VITE_API_BASE_URL);
	if (!authtoken) {
		return redirect(303, `/login?redirectTo=/movies`);
	}
	//console.log(">>>> Movie ID: ", id);
	//console.log(">>>> Movie URL: ", movieurl);
	try {
		let res = await fetch(movieurl, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authtoken}`
			}
		});
		let data = await res.json();
		if (res.ok) {
			console.log('Movies request are a Success, Sending data To Movie Route.');
			return json(data);
		} else {
			console.log('Failure while getting movie data from API. Sending error: ', data.error);
			return redirect(303, `/login?redirectTo=/movies`);
		}
	} catch (err) {
		console.log(">>>> Current Env Used: ", VITE_API_BASE_URL);
		console.error('[Server Movie LOAD] CRITICAL ERROR', err);
	}
}

//This will handle our POST requests to our api
//FOR movie creation.
export async function POST({request, cookies}){
	let newMovie = await request.json();
	let authtoken = cookies.get('authtoken');
	if (!authtoken) {
		return redirect(303, `/login?redirectTo=/movies`);
	}
	try{
		let res = await fetch(`${VITE_API_BASE_URL}/movies`,{
			method: 'Post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authtoken}`
			},
			body: JSON.stringify(newMovie)
		})
		if (res.ok){
			console.log("[Server Movie CREATE] Movie created succesfully");
			let data = await res.json();
			return json(data);
		}else{
			console.log("[Server Movie CREATE] An error happened while creating the movie");
			let data = await res.json();
			return json({error: data.error}, {status: res.status});
		}
	}catch(err){
		console.error('[Server Movie CREATE] CRITICAL ERROR', err);
	
	}
}

// This will handle all movie operations to the API
// For movie UPDATES.
export async function PATCH({ cookies, request, url }) {
	let updateData = await request.json();
	let movieID = url.searchParams.get('id');
	let authtoken = cookies.get('authtoken');

	//console.log(movieID);
	//console.log(updateData);
	if (!authtoken) {
		return redirect(303, `/login?redirectTo=/movies`);
	}
	try {
		let res = await fetch(`${VITE_API_BASE_URL}/movies/${movieID}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authtoken}`
			},
			body: JSON.stringify(updateData)
		});
		let data = await res.json();
		if (res.ok) {
			return json(data);
		} else {
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.error('[Server Movie UPDATE] CRITICAL ERROR', err);
		/*error(500, {
			title: 'Error Updating Movies',
			message: 'There was an error Updating the movies and we Cannot update the movie information.',
			info: 'Please try again later.'
		});*/
	}
}

// This will handle all movie Deletion activities to 
// The api.
export async function DELETE({ url, cookies }) {
	//check whether thee cookie is valid
	//get our movie ID to delete using url
	// send a request for deletion and return the status
	let movieID = url.searchParams.get('id');
	let authtoken = cookies.get('authtoken');
	if (!authtoken) {
		return redirect(303, `/login?redirectTo=/movies`);
	}
	
	//console.log("S")
	try {
		let res = await fetch(`${VITE_API_BASE_URL}/movies/${movieID}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authtoken}`
			}
		});
		let data = await res.json();
		if (res.ok) {
			return json(data);
		} else {
			return json({ error: data.error }, { status: res.status });
		}
	} catch (err) {
		console.log('[Server Movie DELETE] CRITICAL ERROR', err);
		/*error(500, {
			title: 'Error Deleting Movies',
			message: 'There was an error Deleting the movies and we Cannot delete the movie information.',
			info: 'Please try again later.'
		});*/
	}
}