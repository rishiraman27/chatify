import jwt from "jsonwebtoken";
import {ENV} from './env.js';

export const generateToken= (userId,res)=>{
    const {JWT_SECRET, NODE_ENV}= ENV;
    if(!JWT_SECRET){
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    const token= jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d",});
    
    res.cookie("jwt", token ,{
        maxAge: 7*24*60*60*1000, // 7 days
        httpOnly: true, // prevent xss attacks
        sameSite: "strict", // prevent csrf attacks
        secure: process.env.NODE_ENV ==="development"?false:true, // set secure flag in production
    });

    return token;
};