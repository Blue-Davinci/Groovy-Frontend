import { r as redirect } from "./index.js";
import { c as checkAuthentication } from "./auth.js";
const handle = async ({ event, resolve }) => {
  const requestedPath = event.url.pathname;
  let credentials = checkAuthentication(event.cookies);
  let clientAddress = event.getClientAddress();
  if (!clientAddress) {
    const forwardedFor = event.request.headers.get("x-forwarded-for");
    clientAddress = forwardedFor ? forwardedFor.split(",")[0] : "Unknown";
  }
  console.log("[H.S.J] Request is accessing:", requestedPath === "/" ? "/Home" : requestedPath);
  console.log("[H.S.J] Received connection from: ", clientAddress);
  if (!credentials.status && !credentials.user) {
    if (requestedPath.includes("/movies") || requestedPath.includes("/logout")) {
      redirect(303, `/login?redirectTo=${requestedPath}`);
    }
  } else {
    if (requestedPath.includes("/login") || requestedPath.includes("/signup")) {
      redirect(303, `/`);
    }
    event.locals.user = true;
  }
  console.log("[H.S.J] Event Locals User:", event.locals.user);
  const response = await resolve(event);
  return response;
};
export {
  handle
};
