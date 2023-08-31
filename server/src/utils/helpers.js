const bcrypt= require('bcrypt') 

/**
 * @returns id
 */
const id = () =>{
 return Math.floor(Math.random()*100)+Date.now();
}

/**
 * @param string name
 * @returns url
 */
const uri = (param) =>{
  const format_param = param
  .toString()
  .toLocaleLowerCase()
  .replace(" ","_");
  
  return format_param;
 }

/**
 * @param string date
 * @returns current date
 */

const format_date = (format='pt-br',) =>{
 return (new Date()).toLocaleDateString(format,{
  year:"numeric",
  month:"numeric",
  day:"numeric",
  hour:"numeric",
  minute:"numeric",
  second:"numeric"
 });
}

 
module.exports = {
  id,
  format_date,
  uri
}