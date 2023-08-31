const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const user = (new User());
const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const id = decode.userId;
      req.user = await user.findById(id);
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token')
    }
  } else {
    res.status(401);
    throw new Error('Not authorized,no token');

  }
});

module.exports = protect;