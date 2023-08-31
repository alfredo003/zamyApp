const asyncHandler = require('express-async-handler')
const {id,format_date} =require('./../utils/helpers');
const Notification = require('./../models/Notification');
const notification= (new Notification());

/**
 * @desc Get All Notifications
 * @route GET | /notifications
 * @access private
 */
const getAllNofications =  asyncHandler(async()=>{
  
})

/**
 * @desc Get Notification
 * @route GET | /notifications/:id
 * @access private
 */
const getNofication =  asyncHandler(async()=>{

})

module.exports = {
  sendNofication
}