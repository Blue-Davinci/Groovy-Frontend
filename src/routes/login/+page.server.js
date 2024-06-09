import {fail, redirect} from '@sveltejs/kit';
import {z} from 'zod';


// use zord to run a very nice array of tests
// it's self explanatory and we test for both email and password
// from form Data
const registrationSchema = z.object({
	email: z
	.string({required_error: "Email is required"})
	.min(1, {message: "Email is required"})
	.max(64, {message: "Email must be less than 64 characters"}).
	email({message: "Email must be a valid email address"}),

	password: z
	.string({required_error:"Passord is required"})
	.min(8, {message: "Password must be at least 8 characters"})
	.max(32, {message: "Password must be less than 32 characters"})
	.trim(),
});
// This handles our login. You may notice we are using actions on this login section rather than direct server.js
// like we use on the rest of the app.
// The reason is because of a small really annoying bug with redirection.
// Using direct server.js leads us to end up using invalidateAll on our cs,
// If you use that the user gets dumped to /home no matter where they were going
// and if you use goto after the invalidate, the user moves to home before moving
// to the original route.
//To counter this we use could actually just use page.server.js without the server.js, but since I want uniiformity and
//streamlining, we will use page.server actions as the proxy for all login request, allowing us to utilize use:enhance
//that subsequently requires a form POST method as well. This solves actually 2 main issues, getting errors and also
//beautiful notification + handling of redirects. We proxy the request to server.js, get the feedback back, and if good
// we send a redirect back, otherwise we return a FAIL error, which is automatically captured by enhance FORM and the rest
// can be seen in +page.svelte.
export const actions = {
	login: async({fetch, request, url}) => {

		const loginData =  await request.formData();
		const email = loginData.get('email');
		const password = loginData.get('password')
		try{

			//console.log(">>>LOGIN DATA: ", loginData);
			const result = registrationSchema.parse(Object.fromEntries(loginData));
			console.log(result);
		}catch(err){
			 const fieldErrors = err.flatten();
			 //console.log(">>>ERROOORRs: ", fieldErrors);
			 return fail (400,{
				description: "an error occurred while processing your request",
				error: fieldErrors.fieldErrors,
			});
		}
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok){
			const urlpath = url.searchParams.get('redirectTo');
			const redirectTo =  urlpath ? urlpath: '/movies';
			console.log("[page.server.js LOGIN Url Path: ", redirectTo);
			return redirect(303, redirectTo);
		}else{
			const errorData = await res.json();
			return fail (res.status,{
				description: "an error occurred while processing your request",
				error: errorData.error,
			});
		}
	}
}