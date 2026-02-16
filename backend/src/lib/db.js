import mongoose from "mongoose";
import {ENV} from './env.js';

export const connectDb = async()=>{
    try{
        const {MONGO_URL}= ENV;
        if(!MONGO_URL){
            throw new Error("MONGO_URL is not defined in environment variables");
        }
        const conn= await mongoose.connect(ENV.MONGO_URL)
        console.log("Connected to MongoDB", conn.connection.host);
    }catch(error){
        console.log("Error connecting to MongoDB", error);
    }
}