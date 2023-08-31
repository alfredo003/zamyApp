const asyncHandler = require('express-async-handler')
const User = require('./../models/User');
const bcrypt = require('bcrypt')
const { id, format_date } = require('./../utils/helpers');
const user = (new User());

/**
 * @desc Get all user
 * @route GET | /users
 * @access private
 */
const getAllUsers = asyncHandler(async (req, res) => {
  if (req.user.lavelAccess === 'user') {
    res.status(404).json('Não tens permição')
  }
  const result = await user.findAll();
  if (result.length < 1) {
    res.status(404).json({ message: 'Not Found' })
  }
  res.status(200).json(result)
})

/**
 * @desc Get one user
 * @route GET | /users/:id
 * @access private
 */
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await user.findById(Number(id));

  if (!result) {
    res.status(404).json({ message: 'Not Found' })
  }
  res.status(200).json(result)
})

/**
 * @desc Register user
 * @route POST | /users
 * @access private
 */
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, n_phone } = req.body;
  const users = await user.findAll();

  if (!first_name || !last_name || !n_phone) {
    res.status(400);
    throw new Error("All fields are mandatory")
  }

  const verifyuser = users.find((data) => data.n_phone === n_phone);
  if (verifyuser) {
    res.status(400);
    throw new Error("User already existe")
  }
  const salt = await bcrypt.genSalt(10)
  const hasheadPassword = await bcrypt.hash('12345', salt);

  const data = {
    first_name,
    last_name,
    n_phone,
    password: hasheadPassword,
    lavelAccess: 'user'
  }

  const result = await user.create(data);
  if (result) {
    res.status(201).json({
      _id: result._id,
      first_name: result.first_name,
      n_phone: result.n_phone
    })
  } else {
    res.status(400);
    throw new Error("Invalid user data")
  }
})

/**
 * @desc Update User profile
 * @route PUT | /users/profile
 * @access private
 */
const updatetUserProfile = asyncHandler(async (req, res) => {

  const { first_name, last_name, n_phone, lavelAccess, status } = req.body;

  if (!first_name || !last_name || !n_phone) {
    res.status(400);
    throw new Error("All fields are mandatory")
  }

  const data = {
    first_name,
    last_name,
    n_phone,
    lavelAccess,
    status,
  }
  const result = await user.update(req.user._id, data)
  res.status(200).json(result);
  if (result) {
    res.status(201).json(result)
  } else {
    res.status(400);
    throw new Error("Invalid user data")
  }
})


/**
 * @desc Get User profile
 * @route GET | /users/profile
 * @access private
 */
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
})

/**
 * @desc Logout User
 * @route POST | /users/logout
 * @access private
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'User  logged user' })
})

/**
 * @desc Block User
 * @route PUT | /users/:id
 * @access private
 */
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const dataUser = await user.findById(id);
  const data = {
    ...dataUser,
    status: "block"
  }
  const data_current = await user.update(id, data)
  if (data_current) {
    res.status(200).json(data_current);
  }
  res.status(400).json({ message: "User not block" });
});



module.exports = {
  registerUser,
  getAllUsers,
  getUser,
  blockUser,
  logoutUser,
  getUserProfile,
  updatetUserProfile
}