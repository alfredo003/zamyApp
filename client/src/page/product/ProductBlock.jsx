import './productBlock.css';
import avatar from './../../assets/image.png';

const ProductBlock = () =>{
return ( 
   <div className='product_block'>
              <div className='product_img'>
                <img src={avatar} alt="" />
              </div>
              <div className='product_legend'>
                <span className='nameProduct'>
                  Sapatos
                </span>
                  <span>
                    Preço:100kz
                  </span>|
                    <span>
                    Stock:100
                  </span>  
              <div className='product_config'>
                <button className='btn-danger small'>Eliminar</button>
                <button className='btn-warning small'>Visualizar</button>
              </div>
             
              </div>
          </div> 
)
}


export default ProductBlock;