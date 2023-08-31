import Home from './../page/Home'
import Users from './../page/Users'
import Login from './../page/Login'
import Employee from './../page/Employee'
import RegisterProduct from './../page/RegisterProduct'
import Products from './../page/product/Products'
import Solicitation from './../page/Solicitation'
import Profile from '../page/profile/Profile'
import {Routes,Route} from 'react-router-dom'


const Routers = () =>{
  return (
  <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/employee' element={<Employee/>}/>
      <Route path='/register_product' element={<RegisterProduct/>}/>
      <Route path='/list_product' element={<Products/>}/>
      <Route path='/solicitation' element={<Solicitation/>}/>
      <Route path='/profile' element={<Profile/>}/>
  </Routes>
  )
};

export default Routers;