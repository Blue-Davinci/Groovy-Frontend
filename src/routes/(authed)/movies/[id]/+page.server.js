import { error } from '@sveltejs/kit';

export const load = async({params, fetch}) =>{
    const movieId = params.id;
    //console.log(">> Obtained movie Id in [id]: ", movieId);
    const res = await fetch(`/api/movies?id=${movieId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(res.ok){
        const data = await res.json();  // Get the response body as text
        //console.log("In auth load, got data:", data);
        return data;
    } else{
        error(res.status, {
            title: "Error loading Movies",
            message: `Something happened and we Could not load your movie: "${movieId}".`,
            info: "It's not you, it's us. Please try again later."
        });
    }
}