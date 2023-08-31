const express = require('express');
const router = express.Router();
const notifications = require('./../controllers/notification.controller')

router.route('/')
.post(notifications.sendNofication);


module.exports = router;