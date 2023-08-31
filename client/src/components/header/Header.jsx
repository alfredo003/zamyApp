import React, { useState } from 'react'
import './header.css'
import { Link } from "react-router-dom" 
const Header = () =>{
  const [navlist,setNavlist] = useState(false)
  return(
  <>
    <header>
      <div className='container flex'>
        <div className='logo'> 
        <Link to='/home'>zamyApp </Link>
          
           </div>
      
      <div className='nav'>
        <ul className={navlist?'small':'flex'}>
              <li>
                <Link to='/home'>Pagina Incial</Link>
                <Link to='/list_product'>Produtos</Link>
                <Link to='/employee'>Re-vendedores</Link> 
            </li>
        </ul>
      </div>
      <div className="button flex">
        <h4>
          <span>2</span> Notificação
        </h4>
        <button>
          Sair
        </button>
      </div>
      <div className="toggle">
        <button onClick={()=>setNavlist(!navlist)}>
        {navlist ?<i>x</i>:<i>-</i>}
        </button>
      </div>
    </div>

    </header>
  </>
  );
};
export default Header;