import {redirect} from '@sveltejs/kit';
import * as auth from '$lib/utils/auth.js';


// We use auth.js for authentication
// Get the object set from it and check if the status is false
// and does not contain a user property.
export const handle = async({event, resolve}) => {
    const requestedPath = event.url.pathname;
    let credentials = auth.checkAuthentication(event.cookies);
    // Attempt to get the client address directly
    let clientAddress = event.getClientAddress();

    // Fallback to checking the 'X-Forwarded-For' header if direct access fails
    if (!clientAddress) {
        const forwardedFor = event.request.headers.get('x-forwarded-for');
        clientAddress = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown';
    }
    console.log("[H.S.J] Request is accessing:",requestedPath==="/"? "/Home":requestedPath);
    console.log("[H.S.J] Received connection from: ", clientAddress);
    // Check if user is authenticated for every request
    // If user is not authenticated and trying to access /movies then, 
    // we redirect to the login page
    if(!credentials.status && !credentials.user){
        if(requestedPath.includes('/movies') || requestedPath.includes('/logout')){
            //console.log("[HOOKS.SERVER.JS] Credentials:",credentials)
            redirect(303, `/login?redirectTo=${requestedPath}`);
        }
    }else{
        // otherwise if logged in and trying to access login or signup then
        // we redirect them to the home page
        if(requestedPath.includes('/login') || requestedPath.includes('/signup')){
            redirect(303, `/`);
        }
        // proceed with writting the locals
        // what we will do is simply set the locals to true rather than do write the 
        // tokem cookie content.
        event.locals.user = true;
    }
    console.log("[H.S.J] Event Locals User:",event.locals.user);
    const response = await resolve(event);
  
    return response;
  }