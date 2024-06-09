import { r as redirect, j as json } from "../../../../chunks/index.js";
import { V as VITE_API_BASE_URL } from "../../../../chunks/private.js";
async function GET({ cookies, url }) {
  let authtoken = cookies.get("authtoken");
  let id = url.searchParams.get("id");
  let movieurl = id ? `${VITE_API_BASE_URL}/movies/${id}` : `${VITE_API_BASE_URL}/movies`;
  console.log("Current Env Used: ", VITE_API_BASE_URL);
  if (!authtoken) {
    return redirect(303, `/login?redirectTo=/movies`);
  }
  try {
    let res = await fetch(movieurl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`
      }
    });
    let data = await res.json();
    if (res.ok) {
      console.log("Movies request are a Success, Sending data To Movie Route.");
      return json(data);
    } else {
      console.log("Failure while getting movie data from API. Sending error: ", data.error);
      return redirect(303, `/login?redirectTo=/movies`);
    }
  } catch (err) {
    console.log(">>>> Current Env Used: ", VITE_API_BASE_URL);
    console.error("[Server Movie LOAD] CRITICAL ERROR", err);
  }
}
async function POST({ request, cookies }) {
  let newMovie = await request.json();
  let authtoken = cookies.get("authtoken");
  if (!authtoken) {
    return redirect(303, `/login?redirectTo=/movies`);
  }
  try {
    let res = await fetch(`${VITE_API_BASE_URL}/movies`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`
      },
      body: JSON.stringify(newMovie)
    });
    if (res.ok) {
      console.log("[Server Movie CREATE] Movie created succesfully");
      let data = await res.json();
      return json(data);
    } else {
      console.log("[Server Movie CREATE] An error happened while creating the movie");
      let data = await res.json();
      return json({ error: data.error }, { status: res.status });
    }
  } catch (err) {
    console.error("[Server Movie CREATE] CRITICAL ERROR", err);
  }
}
async function PATCH({ cookies, request, url }) {
  let updateData = await request.json();
  let movieID = url.searchParams.get("id");
  let authtoken = cookies.get("authtoken");
  if (!authtoken) {
    return redirect(303, `/login?redirectTo=/movies`);
  }
  try {
    let res = await fetch(`${VITE_API_BASE_URL}/movies/${movieID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`
      },
      body: JSON.stringify(updateData)
    });
    let data = await res.json();
    if (res.ok) {
      return json(data);
    } else {
      return json({ error: data.error }, { status: res.status });
    }
  } catch (err) {
    console.error("[Server Movie UPDATE] CRITICAL ERROR", err);
  }
}
async function DELETE({ url, cookies }) {
  let movieID = url.searchParams.get("id");
  let authtoken = cookies.get("authtoken");
  if (!authtoken) {
    return redirect(303, `/login?redirectTo=/movies`);
  }
  try {
    let res = await fetch(`${VITE_API_BASE_URL}/movies/${movieID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authtoken}`
      }
    });
    let data = await res.json();
    if (res.ok) {
      return json(data);
    } else {
      return json({ error: data.error }, { status: res.status });
    }
  } catch (err) {
    console.log("[Server Movie DELETE] CRITICAL ERROR", err);
  }
}
export {
  DELETE,
  GET,
  PATCH,
  POST
};
