const Core = require('./../utils/Core');

class Product extends Core{
   
  constructor(tableDB='products'){
   super(tableDB)
  }
 

} 

module.exports = Product;

// const product = new Product();
// product.findAll().then(console.log).catch((o)=>{console.log(o)});