import "../../chunks/index.js";
const cookieName = "flash";
const flashCookieOptions = {
  path: "/",
  maxAge: 120,
  httpOnly: false,
  sameSite: "strict"
};
function loadFlash(cb) {
  return async (event) => {
    const flash = _loadFlash(event).flash;
    const loadFunction = await cb(event);
    return { flash, ...loadFunction };
  };
}
function _loadFlash(event) {
  const dataString = event.cookies.get(cookieName);
  if (!dataString) {
    return { [cookieName]: void 0 };
  }
  let data = void 0;
  if (dataString) {
    const setFetchDest = event.request.headers.get("sec-fetch-dest");
    const accept = event.request.headers.get("accept");
    if (event.isDataRequest || setFetchDest == "empty" || accept == "*/*" || accept?.includes("application/json"))
      ;
    else {
      event.cookies.delete(cookieName, { path: flashCookieOptions.path });
    }
    try {
      data = JSON.parse(dataString);
    } catch (e) {
    }
  }
  return {
    [cookieName]: data
  };
}
const load = loadFlash(async ({ locals }) => {
  let user = locals.user;
  console.log("[Layout.server.js ROOT] User:", user);
  return {
    props: {
      user
    }
  };
});
export {
  load
};
