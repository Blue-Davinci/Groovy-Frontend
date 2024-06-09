import { r as redirect } from "../../../chunks/index.js";
import { c as checkAuthentication } from "../../../chunks/auth.js";
function load({ cookies, url }) {
  if (!checkAuthentication(cookies)) {
    redirect(303, `/login?redirectTo=${url.pathname}`);
  }
}
export {
  load
};
