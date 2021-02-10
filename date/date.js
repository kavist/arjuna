
const moment = require('moment');

class DateUtil 
{

  static getFullDate()
  {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  
  static moment(date = new Date())
  {
    return moment(date);
  }

}

module.exports = DateUtil;