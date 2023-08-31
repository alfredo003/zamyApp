const jwt = require("jsonwebtoken");
 
const generateToken = (res,userId) =>{

 const token = jwt.sign({ userId },process.env.JWT_SECRET,{
  expiresIn:'1d'
 });

 res.cookie('jwt',token,{
  httpOnly:true,
  secure: process.env.NODE_ENV,
  sameSite:'strict',
  maxAge:30*24*60*60*1000,
 });

}
module.exports = {generateToken};