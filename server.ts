console.log("Welcome to ebook API");

import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db"; // Default import

const startServer =async()=>{
//connect database
    await connectDB();

    const port= config.port||3000;
    // jb project complex hota hai tb process.env complex ho jata hai isliye src ke andr config folder bna do 

    app.listen(port,()=>
    {
    console.log(`listning on ${port}`);
    });
};
startServer();
