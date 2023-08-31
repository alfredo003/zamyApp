const asyncHandler = require('express-async-handler')
const {id,format_date} =require('./../utils/helpers');
const Product = require('./../models/Product');
const Category = require('./../models/Category');
const category= (new Category());

const product = (new Product());
/**
 * @desc Get All Products
 * @route GET | /products
 * @access private 
 */
const getAllProducts = asyncHandler(async(req,res)=>{
  const result = await product.findAll('user',req.user._id);
  res.status(200).json(result);
})

/**
 * @desc Get Product
 * @route GET | /products/:id
 * @access private
 */
const getProduct = asyncHandler(async( req,res)=>{
  const {id} = req.params;
  const result = await product.findById(Number(id));
  res.status(200).json(result);
})

/**
 * @desc Register new product
 * @route POST | /products
 * @access private
 */

const registerProduct= asyncHandler(async(req,res)=>{
  if( req.user.lavelAccess === 'user'){
    res.status(404);
    throw new Error("Not authorized")
  }
  const {
    nameProduct,
    photo, 
    qtd,
    price,
    price_klp,
    category, 
    description
 }= req.body;

 if(!nameProduct || !qtd || !price || !price_klp){
  res.status(400);
  throw new Error("All fields are mandatory");
 }
  const data = {
    _id:id(),
    nameProduct,
    photo, 
    qtd,
    price,
    user:req.user._id,
    price_klp,
    category, 
    description,
    created_at:format_date()
 }

 const result = await product.create(data);
 if(result){
  res.status(201).json(data);
  }else{
    res.status(400);
    throw new Error("Invalid product data")
  }
})
 
/**
 * @desc update product
 * @route POST | /products
 * @access private
 */ 

const updateProduct= asyncHandler(async(req,res)=>{
  if(req.user.lavelAccess === 'user'){
    res.status(404);
    throw new Error("Not authorized")
  }
  const idProduct =req.params.id;
  const {
    nameProduct,
    photo, 
    qtd,
    price,
    price_klp,
    category, 
    description
 }= req.body;

 if(!nameProduct || !qtd || !price || !price_klp){
  res.status(400);
  throw new Error("All fields are mandatory");
 }
  const data = {
    nameProduct,
    photo, 
    qtd,
    price,
    price_klp,
    category, 
    description
 }

 const result = await product.update(idProduct,data);

 res.status(200).json(result)
//  if(result){
//   res.status(201).json(data);
//   }else{
//     res.status(400);
//     throw new Error("Invalid product data")
//   }
  
})

/**
 * @desc Delete All Product
 * @route DELETE | /products
 * @access private
 */
const deleteAllProduct = asyncHandler(async( req,res)=>{
  const result = await product.delete(req.params.id);
  if(result){
    res.status(200).json(result);
  }
  res.status(200).json(result);
})

/**
 * @desc Get All Product these category
 * @route DELETE | /products/categories/:category
 * @access private
 */
const getAllProductsIsCategory = asyncHandler(async( req,res)=>{
  const cat = await category.findAll("url",req.params.category)
  const result = await product.findAll('category',cat.id);
  res.status(200).json(result);
})

/**
 * @desc Delete Product
 * @route DELETE | /products/:id
 * @access private
 */
const deleteProduct = asyncHandler(async( req,res)=>{
  const result = await product.delete(req.params.id);
  res.status(200).json(result);
})

module.exports = { 
  getAllProducts,
  getProduct,
  registerProduct,
  deleteAllProduct,
  deleteProduct,
  updateProduct,
  getAllProductsIsCategory
}