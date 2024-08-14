import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"

dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8000;
//midlle ware
app.use(express.json());
//routes
app.use("/api/v1/user", userRoute )

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server listning ${PORT}`)
})