import jwt from "jsonwebtoken"

const isAuthenticated = async(req,res,next) =>{
    try {
        // Take the token
        const token = req.cookies.token;
        //Check the token is exist or not
        if (!token) {
            return res.status(401).json({
                message:"User not authenticated."
            })
        }
        //Decode the token
        const decode =  await jwt.verify(token,process.env.JWT_SECRET_KEY)
        // If not decode then do this
        if (!decode) {
            return res.status(401).json({
                message:"Invalid token."
            })
        }
        // Give id from token into id
        req.id = decode.userId; // Correct this line
        //If every thing is right then next
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

export default isAuthenticated