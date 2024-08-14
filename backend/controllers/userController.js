import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const register = async(req,res)=>{
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({message:"All field are required"})
        }
        if(password !== confirmPassword ){
            return res.status(400).json({message:"Password do not match"})
        }
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({message:"Username already exit try diffrent"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        //profilephoto
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/female?username=${username}`

        await User.create({
            fullName,
            username,
            password:hashedPassword,
            profilePhoto:gender === male ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })
    } catch (error) {
        console.log(error);
    }
}

// export const register = async(req,res)={
//     try {
        
//     } catch (error) {
        
//     }
// }

// export const register = async(req,res)={
//     try {
        
//     } catch (error) {
        
//     }
// }