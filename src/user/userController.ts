import { NextFunction ,Request,Response} from "express";
import { Express } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel"

const createUser = async(req:Request,res:Response,next:NextFunction)=>
    {

        // whenever request come there are few steps to follow 
        // Validation
        // process 
        // response 

      //validation.........................................
      // Note we can use express validator library for complex validation  
      
      const {name,email,password}=req.body;
        // will give error if we have app.use(exprees.json)

        if(!name||!email||!password)
            {

            const error=createHttpError(400,"All field are required")
                // we will return the client below mesage but already we have global error handler 
                 //return res.json({message:"All fields are required"});
            return next(error)// passing error to global error handler from there it wil be sent to client 
            
            }
        
// Check if there is user already registed in the datbase or not 

// Data base Call
// findOne will return document or null

const user = await userModel.findOne({email:email})
if(user){
    const error=createHttpError(400,"User Already exist with this email")
    return next(error)
}      




        res.json({message:"User created"});
    }
  



export {createUser};// jo hame bahar use krna hai usse export kr rhe 