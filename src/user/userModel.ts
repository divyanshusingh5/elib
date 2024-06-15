import mongoose from 'mongoose'
import { User } from './userTypes';



const userSchema=new mongoose.Schema<User>({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});
// jb bhi record bnaega tb do extra field banenge created ap updated app using timestamps:true


// mongoose will create collection name as Users 
export default mongoose.model<User>('User',userSchema)