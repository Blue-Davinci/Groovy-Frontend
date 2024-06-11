import {tokenSchema} from '$lib/utils/auth.js';
//import {error} from '@sveltejs/kit';
export const load = async ({url}) => {
    const token = url.searchParams.get('token');
    console.log(">>> The token is: ", token);
    try{
        const result = tokenSchema.parse(token);
        console.log("Token Zod:",result);
        return {token: token};
    }catch(err){
         const fieldErrors = err.flatten();
         console.log(fieldErrors);
         /*error (400,{
            title: "Verification Failed",
            message: fieldErrors.formErrors,
            info: "Please recheck your token and try again"
        });*/
        return {error : fieldErrors.formErrors};
    }
    
}