import { NextFunction ,Request,Response} from "express";
import { Express } from "express";
const createUser = async(req:Request,res:Response,next:NextFunction)=>
    {
        res.json({message:"User created"});
    }




export {createUser};// jo hame bahar use krna hai usse export kr rhe 