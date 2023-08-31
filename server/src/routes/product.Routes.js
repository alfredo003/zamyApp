const express = require('express')
const router = express.Router();
const productController = require('./../controllers/product.contoller')


router.route('/')
.get(productController.getAllProducts)
.post(productController.registerProduct)
.delete(productController.deleteAllProduct);
              
router.route('/:id')
.get(productController.getProduct)
.put(productController.updateProduct)
.delete(productController.deleteProduct);

router.route('/categories/:category')
.get(productController.getAllProductsIsCategory);

module.exports = router; 

