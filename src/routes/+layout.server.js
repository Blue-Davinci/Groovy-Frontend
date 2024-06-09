//load data from our hook up the chain
// we'll get the user event.local and
// propogate it to our files for credential
//settings.
// The result is a boolean value, either authed(true) or not(false)
import { loadFlash } from 'sveltekit-flash-message/server';
export const load =  loadFlash(async({locals}) =>{
    let user = locals.user;
    console.log("[Layout.server.js ROOT] User:",user);
    return{
        props: {
            user
        }
    }
});