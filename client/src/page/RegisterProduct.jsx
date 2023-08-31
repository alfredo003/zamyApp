import React from 'react'
import Layout from './../Layout/Layout'
import Title from '../components/title/Title';
import avatar from './../assets/avatar.png';
import './registerProduct.css';
function RegisterProduct(){
  return(
    <Layout>
        <Title title='Registrar Produto'/>
      <div className='containner-register'>
        <form method='POST' className='register_product'>
       
          <div className='left'>
                <img src={avatar} alt='' className='avatar'/>
          </div>
 
          <div  className='right'>
            <input type="file" name="photo" />
            <input type="text" name="name" placeholder="Nome do Produto" />
            <input type="text" name="price_unit" placeholder="Preço Unitátio" />
            <input type="text" name="price_klp" placeholder="Preço KLP" />
            <input type="text" name="qtd" placeholder="Quantidade" />
          
            <select name="" id="category">
              <option value="">Categoria:</option>
              <option value=""></option>
            </select>
            <button>Registar</button>
          </div>
        </form>
        </div>
  
    </Layout>
  ) 
}
export default RegisterProduct;