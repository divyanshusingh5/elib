import express from 'express';

const app=express();



//routes 
//http methods :get,post,pput ,[patch]
// url segmement write here
// res object used to resend response to client in form mostly json  
app.get('/',(req,res,next)=>{
    res.json({message:"welcome to api"})
}) 


export default app;
