import { redirect } from '@sveltejs/kit';


export const actions = {
    default: ({cookies}) => {
        cookies.delete('authtoken', {path:'/'});
        redirect(303, '/');
    }
};