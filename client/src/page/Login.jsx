import React, { useState } from "react";
import './Login.css';
import Notification from "../components/Notification";
const Login = () =>{
  
  const cookie =window.localStorage.getItem('zamyApp-password');
  const [n_phone,setN_phone] = useState('');
  const [password,setPassword] = useState(cookie);
  const [notification,setNotification] = useState('');
  const [rememberPassword,setRememberPassword] = useState((cookie==="")?false:true)
  
  function verifyCookie(password){
    if(rememberPassword === true){
    return   window.localStorage.setItem('zamyApp-password',password);
    } else{
    return window.localStorage.setItem('zamyApp-password','');
    }
  }

   const submitHandler = async(e) =>{
       e.preventDefault(); 
       verifyCookie();
          if(!n_phone || !password){
              setNotification(
              <Notification 
                message="Preencha todos os campo" 
                type="warning"

               />)
          }else{
            window.location='/home';
          }
      }   

  return (
    <>
  <div className="container-from-main">
       <form action="" className="container-form" onSubmit={submitHandler}>
       <h2>logo zamy app</h2>

       {notification}
        <input 
          type="text"
          name="n_phone" 
          placeholder="Nº Telefone"
          value={n_phone}
          onChange={(e)=>setN_phone(e.target.value)}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Palavra-passe" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />

        <label htmlFor="rememberPassword">
          <input type="checkbox" 
          checked={rememberPassword}  
          id="rememberPassword"
          onChange={(e)=>setRememberPassword(e.target.checked)} />
          Lembrar senha?
        </label>
        <button className="login-btn" type="submit">
            Entrar
            <i class="icon-mail"></i>
        </button>

       </form>  
       <div className="footer">Developer by <a href="">timo</a> </div>
  </div>

  </>
  );
};

export default Login;