import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params, fetch }) => {
  const movieId = params.id;
  const res = await fetch(`/api/movies?id=${movieId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    error(res.status, {
      title: "Error loading Movies",
      message: `Something happened and we Could not load your movie: "${movieId}".`,
      info: "It's not you, it's us. Please try again later."
    });
  }
};
export {
  load
};
