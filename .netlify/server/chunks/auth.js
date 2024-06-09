function checkAuthentication(cookies) {
  let user = cookies.get("authtoken");
  if (!user || user === null) {
    return { status: false };
  } else {
    return { status: true, user };
  }
}
export {
  checkAuthentication as c
};
