
const moment = require('moment');

class DateUtil 
{

  static getFullDate(date = new Date())
  {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
  
  static moment(date = new Date())
  {
    return moment(date);
  }

}

module.exports = DateUtil;