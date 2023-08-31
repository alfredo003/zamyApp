import React from 'react'
import Layout from './../Layout/Layout'
import MenuHome from '../components/menuHome/MenuHome';
import Title from '../components/title/Title';

function Home(){
  return(
    <Layout>
      <Title title='Pagina Inicial'/>
      <MenuHome/>
      
    </Layout>
  ) 
}
export default Home;