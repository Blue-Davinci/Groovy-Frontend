import {z} from 'zod';

const tokenSchema = z
    .string({required_error: "A Token is required"})
    .min(26, {message: "A Valid Token is required"})
    .max(30, {message: "The Token is Invalid"})
    .refine(value => value.trim().length > 0, {message: "Token cannot be only whitespace"});

const passwordSchema = z
.string({required_error: "A Password is required"})
.min(1, {message: "A Valid Password is required"})
.max(30, {message: "The Password is Invalid"})
    
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

export {checkAuthentication, tokenSchema, passwordSchema};