import React from 'react'
import Layout from './../../Layout/Layout'
import './products.css';
import Title from '../../components/title/Title';
import SearchProducts from './SearchProducts';
import ProductBlock from './ProductBlock';

function Products(){
  return(
    <Layout>
       <Title title='Lista de Produtos'/>
       <div className='container'>
        
         <SearchProducts/>
        <div className='product_list'>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
         <ProductBlock/>
          </div>
       </div>
    </Layout>
  ) 
}
export default Products;