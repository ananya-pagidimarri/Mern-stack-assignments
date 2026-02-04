import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){
    //token verification logic
    //1.Get the token from req(using cookie-parser)
    let signedToken=req.cookies.token;//{token :""}
    if(!signedToken){        any
        return res.status(401).json({message:"Please login first"})
    }

    //2.verify token(decoded)
      let decodedToken = jwt.verify(signedToken, "abcdef");
      console.log("decoded token:", decodedToken);
      next();
}