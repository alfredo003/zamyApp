import './searchProduct.css';
import {Link} from 'react-router-dom'
 
const SearchProduct = () =>{
  const data = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];
return(
<section className='search'>
  <div className='search_title'>
    <h1>Nossos Produtos</h1>
    <p>Lista de produtos cadastrados</p>
  </div>

  <div className='product_search'>
   <input type="search" name="" placeholder="Buscar Produto" />
  </div>
  <div className="category_search">
    <div className='category'>
    
      {
        data.map((category)=>{ 
          return(
              <Link to=''>Calçados</Link>
          )
        })
      }
  
    </div>
  </div>
</section>
)

}

export default SearchProduct;