const asyncHandler = require('express-async-handler')
const User = require('./../models/User');
const { generateToken } = require('./../utils/generateToken')
const bcrypt = require('bcrypt')
const user = (new User());
/**
 * @desc Auth user/set Token
 * @route POST | /users/auth
 * @access public
 */
const authUser = asyncHandler(async (req, res) => {
  const { n_phone, password } = req.body;

  if (!n_phone || !password) {
    res.status(401);
    throw new Error("All fields are mandatory!")
  }

  const datas = await user.findAll();
  const verifyUser = datas.find((data) => (data.n_phone === n_phone))
  if (!verifyUser) {
    res.status(401);
    throw new Error("verify your phone number")
  }
  const checkPassword = await bcrypt.compare(password, verifyUser.password);
  if (!checkPassword) {
    res.status(401);
    throw new Error("verify your password")
  }
  generateToken(res, verifyUser._id);
  res.status(200).json("login with success");
})




module.exports = {
  authUser
}