import { e as error } from "../../../../chunks/index.js";
async function load({ fetch }) {
  const res = await fetch("/api/movies", {
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
      message: `Something happened and we Could not load any Movies.`,
      info: "it's not you, it's us. Please try again later."
    });
  }
}
export {
  load
};
