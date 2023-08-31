const express = require('express')
const router = express.Router();
const userController = require('./../controllers/user.controller')

router.route('/')
.get(userController.getAllUsers)
.post(userController.registerUser);

router.route('/profile')
.get(userController.getUserProfile)
.put(userController.updatetUserProfile);

router.route('/:id')
.get(userController.getUser)
.put(userController.updatetUserProfile)

router.route('/block/:id')
.patch(userController.blockUser)

router.post('/logout', userController.logoutUser)

module.exports = router;

