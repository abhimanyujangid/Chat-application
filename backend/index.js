// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./socket/socket.js";
import path from "path";

dotenv.config({});

 //----------------------------Adding .env file---------------------------------
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

//-----------------------------Middle ware----------------------------------
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'https://chat-application-c9si.onrender.com',
    credentials:true
};
//-----------------Add a cors function for adding frontend and backend-----------
app.use(cors(corsOption)); 


//----------------------------------Routes------------------------------------
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);

//-------------------------------Deployment-----------------------------------
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/frontend/build/index.html"));
});
 

server.listen(PORT, ()=>{
    connectDB();
   
});

