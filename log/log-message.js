
const DateUtil = require('../date/date');

class LogMessage
{

  constructor(params)
  {
    this.header = LogMessage.getDefaultHeader(params.header);
    this.body = LogMessage.getDefaultBody(params.body);
    this.footer = LogMessage.getDefaultFooter(params.footer);
    this.reportDate = DateUtil.getFullDate();
  }

  toString()
  {
    return `
      ${this.header} \n\r
      ${this.body} \n\r
      ${this.footer} \n\r
    `;
  }

  toObject()
  {
    return {
      header: this.header,
      body: this.body,
      footer: this.footer,
    };
  }

  toJson()
  {
    return JSON.stringify(this.toObject());
  }

  getReportDate()
  {
    return this.reportDate;
  }

  getReportOnlyDate()
  {
    return DateUtil.getOnlyDate(this.reportDate);
  }

  getReportHeader()
  {
    return this.header;
  }

  getReportBody()
  {
    return this.body;
  }

  getReportFooter()
  {
    return this.footer;
  }

  static getDefaultHeader(header) 
  {
    if (!header) {
      return `[LOG REPORT] - ${DateUtil.getFullDate()}`;
    }
    return header;
  }

  static getDefaultFooter(footer) 
  {
    if (!footer) {
      return `Report delivered by: Arjuna [https://github.com/gurisa/arjuna]`;
    }
    return footer;
  }

  static getDefaultBody(body) 
  {
    let message = '';
    if (body instanceof Error) {
      message = `
        Message: \n\r
        ${body.message || '< No Message >'}\n\r
        Stack Trace: \n\r
        ${body.stack || '< No Stack >'}
      `;
    }
    else if (body instanceof String) {
      message = body;
    }
    else {
      message = JSON.stringify(body);
    }
    return message;
  }

}

module.exports = LogMessage;