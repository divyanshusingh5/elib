import mongoose from 'mongoose'
import { config  } from "./config";
// we will  create arrow asyn function to give connection string - Database url

const connectDB=async()=>
    
    {

        try
        {

        mongoose.connection.on("connected",()=>{
            console.log("connected to database successfully");
        });
        
        mongoose.connection.on('error',(err)=>
            {
                console.log("Error in connecting to database",err);
            });
    
// when mooges get connected connection wevent is trigeted and we will get output 
         

// ek baari connection aane ke baad fir connection ja skti hai uske error ek liye below code 


await mongoose.connect(config.databaseURL as string);



    }
    catch(err)
    {
        console.log("Failed to connect to datas base",err);
        process.exit(1);
    }
};

export default  connectDB;