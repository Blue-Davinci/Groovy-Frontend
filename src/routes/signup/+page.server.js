import {fail, redirect} from '@sveltejs/kit';
//redirect
import { z } from 'zod';


//similar to login, probably change login to the same behaviour.
// we check all the things we need
// after that we use super refine to add custom password check
const registrationSchema = z.object({
    name: z
    .string({required_error: "Your name is required"})
	.min(1, {message: "Your name is required"})
	.max(64, {message: "Email must be less than 64 characters"}),

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

    confirmpassword : z
    .string({required_error:"Confirmation Passord is required"})
	.min(8, {message: "Confirmation Password must be at least 8 characters"})
	.max(32, {message: "Confirmation Password must be less than 32 characters"})
	.trim(),
})
.superRefine(({ confirmpassword, password }, ctx) => {
    if (confirmpassword !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'Password and Confirm Password must match',
            path: ['password']
        });
        ctx.addIssue({
            code: 'custom',
            message: 'Password and Confirm Password must match',
            path: ['confirmpassword']
        });
    }
});


export const actions = {
    signup: async({fetch,request}) => {
        const signupData = await request.formData();
        const name = signupData.get('name');
        const email = signupData.get('email');
        const password = signupData.get('password');
        console.log("in signup: ", name, email, password);
        try{
            const result = registrationSchema.parse(Object.fromEntries(signupData));
            console.log(result);
        }catch(err){
            const fieldErrors = err.flatten();
            return fail(400,{
                description: "An error occurred while processing your request",
                error: fieldErrors.fieldErrors
            })
        }

        const res = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const urlpath = "/login";
            return redirect(303, urlpath);
        } else {
            const errorData = await res.json();
            return fail (res.status,{
				description: "an error occurred while processing your request",
				error: errorData.error,
			});
        }
    }

}