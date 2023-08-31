const Core = require('./../utils/Core');

class Category extends Core {

  constructor(tableDB = 'categories') {
    super(tableDB)
  }


}

module.exports = Category;