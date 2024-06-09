import { f as fail, r as redirect } from "../../../chunks/index.js";
import { z } from "zod";
const registrationSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, { message: "Email is required" }).max(64, { message: "Email must be less than 64 characters" }).email({ message: "Email must be a valid email address" }),
  password: z.string({ required_error: "Passord is required" }).min(8, { message: "Password must be at least 8 characters" }).max(32, { message: "Password must be less than 32 characters" }).trim()
});
const actions = {
  login: async ({ fetch, request, url }) => {
    const loginData = await request.formData();
    const email = loginData.get("email");
    const password = loginData.get("password");
    try {
      const result = registrationSchema.parse(Object.fromEntries(loginData));
      console.log(result);
    } catch (err) {
      const fieldErrors = err.flatten();
      return fail(400, {
        description: "an error occurred while processing your request",
        error: fieldErrors.fieldErrors
      });
    }
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.ok) {
      const urlpath = url.searchParams.get("redirectTo");
      const redirectTo = urlpath ? urlpath : "/movies";
      console.log("[page.server.js LOGIN Url Path: ", redirectTo);
      return redirect(303, redirectTo);
    } else {
      const errorData = await res.json();
      return fail(res.status, {
        description: "an error occurred while processing your request",
        error: errorData.error
      });
    }
  }
};
export {
  actions
};
