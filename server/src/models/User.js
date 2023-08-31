const Core = require('./../utils/Core');

class User extends Core {

  constructor(tableDB = 'users') {
    super(tableDB)
  }


}


module.exports = User;

// const user = new User();
// user.findAll().then(console.log).catch((o)=>{console.log(o)});