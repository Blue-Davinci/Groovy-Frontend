import { e as error } from "../../../chunks/index.js";
import { z } from "zod";
const tokenSchema = z.string({ required_error: "A Token is required" }).min(26, { message: "A Valid Token is required" }).max(30, { message: "The Token is Invalid" }).refine((value) => value.trim().length > 0, { message: "Token cannot be only whitespace" });
const load = async ({ url, fetch }) => {
  const token = url.searchParams.get("token");
  if (token === null || token === "") {
    error(400, {
      title: "Verification Failed",
      message: "Token authentication failed",
      info: "Please recheck your token and try again"
    });
  }
  try {
    const result = tokenSchema.parse(token);
    console.log("Token Zod:", result);
  } catch (err) {
    const fieldErrors = err.flatten();
    console.log(fieldErrors);
    error(400, {
      title: "Verification Failed",
      message: fieldErrors.formErrors,
      info: "Please recheck your token and try again"
    });
  }
  console.log(">>>Token: ", token);
  let res = await fetch("/api/verify", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token })
  });
  if (res.ok) {
    let data = await res.json();
    let { user } = data;
    console.log("Verification success: ", data);
    return { user };
  } else {
    let data = await res.json();
    console.log("Back from API, we got an error: ", data);
    error(400, {
      title: "Verification Failed",
      message: data.error.token,
      info: "Please recheck your token and try again"
    });
  }
};
export {
  load
};
