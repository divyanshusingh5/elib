import { error } from 'console';
import express,{NextFunction,Request,Response} from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config';
import globalErrorHandler from './middlewares/globalErrorHandler';
import userRouter from './user/userRouter';


const app=express();

 

//routes 
//http methods :get,post,pput ,[patch]
// url segmement write here
// res object used to resend response to client in form mostly json  
app.get('/',(req,res,next)=>{
const error=createHttpError(400,"something went wrong");
throw error

    res.json({message:"welcome to api"})
}) 
// Register the router here 
app.use('/api/users',userRouter)//register the router here 




// global error handler must be at the last of all routes 
// app.use() is used to handle middle ware  take 4 inputs 
// err is http error install http errors
// since app.use is a middle ware will keep it at another file 
app.use(globalErrorHandler)// we just need to pass no need to call express will call

export default app;
