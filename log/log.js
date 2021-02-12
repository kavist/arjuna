
const path = require('path');
const rfs = require('rotating-file-stream');

const LogSlack = require('./log-slack');
const LogMessage = require('./log-message');

class Log 
{

  static report(data, params = null) 
  {
    let message = data;
    if (!(data instanceof LogMessage)) {
      message = new LogMessage({
        body: data
      });
    }

    Log.consoleReport({
      data: message,
      ...params
    });

    if (params && params.messengers !== undefined && 
      Array.isArray(params.messengers)) {
      if (params.messengers.includes("local")) {
        Log.localReport({
          data: message,
          ...params
        });
      }
      if (params.messengers.includes("online")) {
        Log.onlineReport({
          data: message,
          ...params
        });
      }
    }

  }

  static localReport(params) 
  {
    if (!params || !params.data || !params.logDirectory) {
      throw new Error('Invalid params');
    }
    if (!(params.data instanceof LogMessage)) {
      throw new Error('Invalid params');
    }
    if (typeof params.logDirectory !== "string") {
      throw new Error('Invalid params');
    }

    if (params.skip === true || params.skipLocal === true) {
      return;
    }

    const fileName = params.data.getReportOnlyDate() + ".log";
    const logDirectory = params.logDirectory;
    const report = rfs.createStream(fileName, {
      interval: "1d",
      path: path.join(logDirectory),
    });
    report.write(params.data.toString());
    report.end();
  }

  static consoleReport(params) 
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }
    if (!(params.data instanceof LogMessage)) {
      throw new Error('Invalid params');
    }

    if (params.skip === true || params.skipConsole === true) {
      return;
    }

    console.info(params.data.toString());
  }

  static onlineReport(params) 
  {
    if (!params || !params.data || !params.endpoint) {
      throw new Error('Invalid params');
    }
    if (!(params.data instanceof LogMessage)) {
      throw new Error('Invalid params');
    }
    if (typeof params.endpoint !== "string") {
      throw new Error('Invalid params');
    }

    if (params.skip === true || params.skipOnline === true) {
      return;
    }

    LogSlack.send({
      ...params,
      webhook_url: params.endpoint
    });
  }

}

module.exports = Log;