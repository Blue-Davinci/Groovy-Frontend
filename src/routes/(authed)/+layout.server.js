import {redirect} from '@sveltejs/kit';
import * as auth from '$lib/utils/auth.js';

export function load({cookies, url}){
    if(!auth.checkAuthentication(cookies)){
        redirect(303, `/login?redirectTo=${url.pathname}`)
    }
}