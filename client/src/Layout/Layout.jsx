import React from 'react'
import Header from './../components/header/Header'
import './layout.css';
import './../assets/style.css';
function Layout({ children }){
  return(
   <>
   <Header/>
   <main>
     {children}
   </main>
    
 
   
   </>
  ) 
}
export default Layout;