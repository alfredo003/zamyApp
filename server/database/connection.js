const fs = require('fs');

class Connection{
  /**
   * 
   * @param {*} filepath name of database's table 
   */
  constructor(filepath){
    this.filePath = filepath;
  }

  jsonWrite = (data,encoding='utf-8') =>{
    return new Promise((resolve,reject)=>{
      fs.writeFile(this.filePath,JSON.stringify(data,null,2),(error)=>{
          if(error) return reject(error)
          resolve(true)
      })
    })
  }
  
  jsonRead = (encoding='utf-8') =>{
    return new Promise((resolve,reject)=>{
      fs.readFile(this.filePath,(error,data)=>{
          if(error) return reject(error)
           try{
            resolve(JSON.parse(data))
           }catch(err){
            reject(err)
           }
      })
    })
  }

}
 
module.exports = Connection;

//const conn = (new Connection('./zamyApp/products.json'));
// conn.jsonRead().then(console.log).catch((error)=>console.log(error))