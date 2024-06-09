
function checkAuthentication(cookies){
    //we check if the user has a cookie;
    //if the user has a cookie and it's valid we return an object {status: true, user: user}
    //otherwise we return {status: false}
    let user = cookies.get('authtoken');
    if (!user || user === null) {
        return {status: false};
    }else{
        return {status: true, user: user};
    }
}

export {checkAuthentication};