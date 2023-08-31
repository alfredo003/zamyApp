import React from 'react'
import Layout from './../Layout/Layout'
import Title from '../components/title/Title';
import avatar from './../assets/avatar.png';
import './employee.css';
function Employee(){
  let mock = [1,2,3,4,5];
  return(
    <Layout> 
        <Title title='Re-Vendedores'/>
     <div className='container'>
     <section className='search'>
      <div className='search_title'>
        <h1>Nossos Re-vendedores</h1>
        <p>Lista de re-vendedores cadastrados</p>
      </div>
    <div className='product_search'>
       <form action="" className='register'>
          <input type="text" name="" id="" placeholder='Primeiro Nome'/>
          <input type="text" name="" id="" placeholder='Ultimo Nome'/>
          <input type="text" name="" id="" placeholder='Nº Telefone'/>
          <button>Salvar</button>
        </form>
    </div>
</section>
    
      <table> 
        <tr>
        <th className='img_avatar'>#</th>
        <th>Nome</th>
        <th>Nº Telefone</th>
        <th>Estado</th>
        <th>Config</th>
        </tr>
    {  
   mock.map(()=>{
           return( <tr className='hover'>
                <td className='img_avatar'>
                  <img src={avatar} alt='' className='avatar'/>
                </td>
                <td>Alfredo Manuel</td>
                <td>948576070</td>
                <td>Bloqueado</td>
                <td>
                  <button className='btn-edit'>Editar</button>
                  <button className='btn-warning'>Ver</button>
                </td>
            </tr>)
   })
            
       }
        
      </table>
     </div>
    </Layout>
  ) 
}
export default Employee;