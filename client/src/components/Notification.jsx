import React from 'react'
import './Notification.css';

/**
 * 
 * @param {*} message string
 * @param {*} type string
 * @returns 
 */
const Notification= ({type,message})=>{

  const style = !type?'default':type
  return(
  <>
  <div className={`message ${style}`}>
    {message}
  </div>
  </>
  );
}



export default Notification;