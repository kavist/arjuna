
const moment = require('moment');

class DateUtil 
{

  static getFullDate(date = new Date())
  {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
  
  static getOnlyDate(date = new Date())
  {
    return moment(date).format('YYYY-MM-DD');
  }

  static moment(date = new Date())
  {
    return moment(date);
  }

  static wait(duration)
	{
		if (typeof duration !== "number") {
			throw new Error("Invalid duration");
		}
		return new Promise((resolve) => {
			setTimeout(resolve, duration)
		});
	}

}

module.exports = DateUtil;