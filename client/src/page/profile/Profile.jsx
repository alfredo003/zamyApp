import React from 'react'
import Layout from './../../Layout/Layout'
import Title from './../../components/title/Title';
import './profile.css';
function Profile(){
  return(
    <Layout>
      <Title title='Meu Perfil'/>
    
    <div className='container-profile'>
  
    <div className='block'>
        <label htmlFor="">Nome Completo</label>
       <p>Alfredo Manuel</p> 
      </div>
      <div className='block'>
        <label htmlFor="">N Telefone</label>
       <p>943423232</p> 
      </div>
      <div className='block'>
        <label htmlFor="">Nome Completo</label>
       <p>Alfredo Manuel</p> 
      </div>
      <div className='block'>
        <label htmlFor="">Nome Completo</label>
       <p>Alfredo Manuel</p> 
      </div>
      <div className='block'>
        <label htmlFor="">Configurar Conta</label>
        <button className='btn-warning'>Editar Conta</button>
        <button className='btn-danger'>Bloquear conta</button>
      </div>
  </div>
   
    </Layout>
  ) 
}
export default Profile;