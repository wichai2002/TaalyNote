import mongoose from "mongoose";
import express from 'express';
import cors from "cors";
import dotenv from 'dotenv'

// import router
import router from "./routers/routers"

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3005;
process.env.TZ = "Asia/Bangkok"

const logger = () =>
    (req: any, res: any, next: any) => { 
      const timestamp = Date().toString(); 
        const { method, url, ip } = req; 
          console.log(`Logger: ${timestamp} \n${method} ${url} - ${ip}\nEND Task.\n`); 
            next(); 
};

app.use(logger());

const MONGODB = process.env.DBHOST || ""

mongoose.connect(MONGODB).then(() => {
    console.log("Database connected Successfully.");
    console.log("Datetime:", Date());
    
    app.listen(port, () =>{
        console.log(`Server is running on http://127.0.0.1:${port}`);
    })

    app.use("", router)

}).catch(error => console.log(error))



