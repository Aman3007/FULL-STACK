import { VerifyJWTToken } from "../Model/User.js";
export const verifyAuthenticationToken=((req,res,next)=>{
    const token =req.cookies.access_token;
    if(!token){
           return res.status(401).json({ message: "No token, access denied" });
    }

    try {
        const decodeToken = VerifyJWTToken(token);
        req.User=decodeToken;
        console.log(req.User)
         return next()

    } catch (error) {
       return res.status(403).json({ message: "Invalid token" });
    }
           
})
