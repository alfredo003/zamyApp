const Core = require('./../utils/Core');

class Notification extends Core {

  constructor(tableDB = 'notifications') {
    super(tableDB)
  }

  sendNofication(message,receptor,emissor){
   const data ={ 
    message,
    receptor,
    emissor,
    status:'Active'
  }
   this.create(data);
  }
}

module.exports = Notification;