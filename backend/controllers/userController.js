import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


//-----------------------register Start-----------------------
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
            profilePhoto:gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })
        return res
        .status(201)
        .json({
            message:"Account Created SuccessFully.",
            success:true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error during registration." });
    }
}

//.....................for login................................
export const login = async(req,res)=>{
    try {
        const {username ,password} =  req.body; // req 
        //check user name and password is fill or not
        if ( !username || !password ) {
            return res.status(400).json({message:"All field are required"})
        }
        //find user in mongo db
        const user = await User.findOne({username});
        // if user not exist
        if (!user) {
            return res.status(400).json({
                message:"Incorrect user details",
                success:false
            })
        }
        // password match
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        //if password not match
        if (!isPasswordMatch) {
            return res.status(400).json({
                message:"Incorrect user details",
                success:false
            })
        }
        //generate web token
        const tokenData = {
            userId:user._id
        }
        const token = await jwt.sign(tokenData , process.env.JWT_SECRET_KEY, {expiresIn:"1d"})
        //store in cookies now
        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json(
            {
                _id:user._id,
                username:user.username,
                fullName:user.fullName,
                profilePhoto:user.profilePhoto
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error during login." });
    }
}

//-----------------------logout start-----------------------------
export const logout = (req,res) =>{
    try {
        return res
        .status(200)
        .cookie("token","", {maxAge:0})
        .json({
            message:"user logged out sucessfully"
        })
    } catch (error) {
        console.log(error);
        
    }
}
//------------------------ Get Other Users ---------------------------
export const getOtherUsers = async (req, res) => {
    try {
        const { id: loggedInUserId } = req;
        const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        
        res.status(200).json(otherUsers);
    } catch (error) {
        console.error("Error fetching other users:", error);
        res.status(500).json({ message: "Server error" });
    }
};
