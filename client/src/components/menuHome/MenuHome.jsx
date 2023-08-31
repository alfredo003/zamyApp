import React from 'react'
import './menuHome.css';
import { Link } from "react-router-dom" 
const MenuHome= ()=>{
 return(
  <>
      <section className='menuHome background'>
        <div className='container'>
            <div className='content grid5 mtop'>
          
          <Link to='/register_product'>
            <div className='box'>
                  <img src="" alt="" />
                  <h4>Registrar Produto</h4>
                  <label htmlFor="">Nº de Produtos : 50</label>
              </div>
            </Link>
            <Link to='/solicitation'>
            <div className='box'>
                <img src="" alt="" />
                <h4>solicitação</h4>
                <label htmlFor="">Nº de Solicitação : 50</label>
            </div>
            </Link>
            <Link to='/profile'>
            <div className='box'>
                <img src="" alt="" />
                <h4>Meu Perfil</h4>
                <label htmlFor="">Nº de Solicitação : 50</label>
            </div>
            </Link>
          </div>
         </div>
      </section>
  </>
  );
}



export default MenuHome;