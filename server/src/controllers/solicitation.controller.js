const asyncHandler = require('express-async-handler')
const  Solicitation = require('./../models/Solicitation');
const {id,format_date} =require('./../utils/helpers');
const Notification = require('./../models/Notification');
const bcrypt= require('bcrypt')
const solicitation =  (new Solicitation());


/**
 * @desc Get All solicitations
 * @route GET | /solicitations
 * @access private
 */
const getAllSolicitations = asyncHandler(async(req,res) =>{
  const result = await solicitation.findAll('user',req.user._id);
  res.status(200).json(result);
});

/**
 * @desc Get solicitation
 * @route GET | /solicitations/:id
 * @access private
 */
const getSolicitation = asyncHandler(async(req,res) =>{
  const result = await solicitation.findById(req.params.id);
  res.status(200).json(result);
})

/**
 * @desc Register Solicitation
 * @route POST | /solicitations
 * @access pulbic
 */ 
const registerSolicitation = asyncHandler(async(req,res) =>{
  const {
    product,
    typePayment
  } = req.body;

  if(!product || !typePayment){
   res.status(401);
   throw new Error("All fields are mandatory!")
  }

  const data = {
    _id:id(),
    product,
    typePayment,
    user:req.user._id,
    status:"activo",
    created_at:format_date()
 }
 const result = await solicitation.create(data);
    if(result){
   (new Notification).sendNofication("qwqw","qwwqw","qwqw")
      res.status(201).json(data);
    }else{
      res.status(400);
      throw new Error("Invalid solicitation data")
    }
  res.status(200).json(result);
});

/**
 * @desc Accept solicitation
 * @route POST | /solicitations/accept
 * @access private
 */
const AcceptSolicitation = asyncHandler((req,res)=>{

res.status(200).json({message:"Accept"})
});



module.exports = {
  getAllSolicitations,
  getSolicitation,
  registerSolicitation,
  AcceptSolicitation
}