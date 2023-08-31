const Connection = require('./../../database/connection');
const {id,format_date} = require('./../utils/helpers');
const path = require('path')

class Core{
  constructor(table){
    this.db = this._connection(table);
  }
  _connection(table){
    return (new Connection(path.join(__dirname,'../../','database','zamyApp',`${table}.json`)))
  }
  /** 
   * @description Register new data
   * @param {*} data
   * @return boolean
  */
  async create(data){
    const data_current = await this.db.jsonRead();
    const Newdata = {
      _id:id(),
      ...data,
      created_at:format_date()
    }
    data_current.push(Newdata);
    const result = this.db.jsonWrite(data_current);
    if(result) return Newdata;
    return false;
  }
   /** 
   * @description Get All data
   * @param {*} column 
   * @param {*} param 
   * @returns datas
  */ 
  async findAll(column,param){
    const datas = await this.db.jsonRead();
    if(param && column){
      const result = datas.filter((data)=>data[column] === param)
      return result;
    }  
    return (datas);
  }
  /** 
   * @description Get one data
   * @param {*} id 
   * @returns result
  */ 
  async findById(id){
    const datas = await this.db.jsonRead();
    const result =datas.find((data)=>data._id === Number(id))
    return (result);
  }

/** 
   * @description Update one data
   * @param {*} id 
   * @param {*} data 
   * @returns result
  */ 
  async update(id,data){
    const readFileJson = await this.db.jsonRead();
    const indexData =readFileJson.findIndex((data)=>data._id === Number(id))
    readFileJson[indexData] = {...readFileJson[indexData],...data}
    const result= await this.db.jsonWrite(readFileJson)
    return (result);
  }

  async delete(id){
    if(id){
      const datas = await this.db.jsonRead();
      const indexProduct = datas.findIndex((data)=>data._id === Number(id));
      datas.splice(indexProduct,1);
     const updateData= await this.db.jsonWrite(datas)
      return updateData;
    }

    const deleteAll = await this.db.jsonWrite([]);
    return (deleteAll);
  }


  async join(foreignKey,key){
    const datas = await this.db.jsonRead();
    const result = datas.find((data)=>data[key] === Number(foreignKey));
                                      
    return (result);
  }
}


module.exports = Core;

