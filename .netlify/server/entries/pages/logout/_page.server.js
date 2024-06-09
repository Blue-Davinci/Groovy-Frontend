import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: ({ cookies }) => {
    cookies.delete("authtoken", { path: "/" });
    redirect(303, "/");
  }
};
export {
  actions
};
