import express from 'express';
import { createUser } from './userController';


const userRouter=express.Router();

// last /api/user/register so we keep register in router in this for post request create in side request handler  

   
       // We can do this here but good practice is to do it in controller file 
      
      //so instead of this will give reference to this in userController res.json({message:"User registered"});
    
    
userRouter.post('/register',createUser)  

//routes 

export default userRouter;