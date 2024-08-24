import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js"
import cors from "cors"

//-----------------Add a cors function for adding frontend and backend-----------
const corsOption ={
    origin:'http://localhost:5173',
    credentials:true
} 
//----------------------------Adding .env file---------------------------------
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8000;
//-----------------------------Middle ware----------------------------------
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors(corsOption))



//----------------------------------Routes------------------------------------
app.use("/api/v1/user", userRoute )
app.use("/api/v1/message", messageRoute )

//----------------------------------Listening port----------------------------
app.listen(PORT, ()=>{
    connectDB()
    console.log(`server listning ${PORT}`)
})