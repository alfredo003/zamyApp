const asyncHandler = require('express-async-handler');
const {uri} = require('./../utils/helpers')
const Category = require('./../models/Category');
const category= (new Category());
/**
 * @desc Get all Categories
 * @route GET | /categories  
 * @access private
 */
const getAllCategory = asyncHandler(async(req,res)=>{
    const categories = await category.findAll();
    res.status(200).json(categories);
});

/**
 * @desc Register Category
 * @route POST | /categories  
 * @access private
 */
const registerCategory = asyncHandler(async(req,res)=>{
  const {name} = req.body;
  if( req.user.lavelAccess === 'user'){
    res.status(404);
    throw new Error("Not authorized")
  }
  if(!name){
    res.status(400);
    throw new Error("All fields are mandatory");
   }

  const data = {
    name,
    url:uri(name),
    status:'active'
  }
 
  const result = await category.create(data);
  if(result){
   res.status(201).json(result);
   }else{
     res.status(400);
     throw new Error("Invalid category data")
   }
})
/**
 * @desc Update Category
 * @route PUT | /categories/:id
 * @access private
 */
const updateCategory = asyncHandler(async(req,res)=>{
  const {name} = req.body;
  if( req.user.lavelAccess === 'user'){
    res.status(404);
    throw new Error("Not authorized")
  }
  if(!name){
    res.status(400);
    throw new Error("All fields are mandatory");
   }

  const data = {
    name,
    url:uri(name),
    updated_at:format_date()
  }
 
  const result = await category.update(req.params.id,data)
  res.status(200).json(result);
})

/**
 * @desc Get Category
 * @route GET | /categories/:id
 * @access private
 */
const getCategory = asyncHandler(async(req,res)=>{
  const {id} = req.params;
  const result = await category.findById(id)
  res.status(200).json(result);
})
/**
 * @desc Delete Category
 * @route DELETE | /category/:id
 * @access private
 */
const deleteCategory = asyncHandler(async(req,res)=>{
  const result = await category.delete(req.params.id);
  res.status(200).json(result);

});

module.exports = {
  getAllCategory,
  registerCategory,
  updateCategory,
  getCategory,
  deleteCategory
}