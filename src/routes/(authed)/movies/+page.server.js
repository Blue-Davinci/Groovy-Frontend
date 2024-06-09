import { error } from '@sveltejs/kit';

export async function load({fetch}){
    const res = await fetch('/api/movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(res.ok){
        const data = await res.json();  // Get the response body as text
        return data;
    } else {
        error(res.status, {
            title: "Error loading Movies",
            message: `Something happened and we Could not load any Movies.`,
            info: "it's not you, it's us. Please try again later."
        });
    } 
    
}