import mongoose from "mongoose";

export const connectDb =async () => {
    try{
        await mongoose.connect()
    }
    catch(err){
        console.error(err);
    }
}