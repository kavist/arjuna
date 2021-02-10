
const { app } = require('./../../config/app');
const { channels } = require('../../config/log');

const path = require('path')
const rfs = require('rotating-file-stream')
const { IncomingWebhook } = require('@slack/webhook')

class Log 
{

  static report(data, params = null) 
  {
    if (app.env !== "test") {
      Log.localReport(data);
    }

    if (params === null || (params.custom === null && app.env !== "test")) {
      Log.onlineReport(data, params);
    } 
    else if (params) {
      if (params.console) {
        Log.consoleReport(data);
      }
      if (params.online && app.env !== "test") {
        Log.onlineReport(data, params);
      }
      if (params.custom && app.env !== "test") {
        Log.customReport(data, params);
      }
    }
  }

  static customReport(data, params) 
  {
    const header = Log.getReportHeader(data);
    const date = Log.getReportDate(data);
    const message = Log.getReportMessage(data);
    const stack = Log.getStackTrace(data);
    const fileName = Log.getCurrentDate() + ".log";
    const report = rfs.createStream(fileName, {
      interval: "1d",
      path: path.join(__dirname, "./../../logs/" + params.custom.dirname),
    });
    report.write(
      header +
        "\r\n" +
        date +
        "\r\n\r\n" +
        message +
        "\r\n\r\n" +
        stack +
        "\r\n\r\n"
    );
    report.end();
  }

  static localReport(data) 
  {
    const header = Log.getReportHeader(data);
    const date = Log.getReportDate(data);
    const message = data;
    const stack = Log.getStackTrace(data);
    const fileName = Log.getCurrentDate() + ".log";
    const report = rfs.createStream(fileName, {
      interval: "1d",
      path: path.join(__dirname, "./../../logs/report"),
    });
    report.write(
      header +
        "\r\n" +
        date +
        "\r\n\r\n" +
        message +
        "\r\n\r\n" +
        stack +
        "\r\n\r\n"
    );
    report.end();
  }

  static consoleReport(data) 
  {
    const header = Log.getReportHeader(data);
    const date = Log.getReportDate(data);
    const message = Log.getReportMessage(data);
    const stack = Log.getStackTrace(data);
    console.log(
      header +
        "\r\n" +
        date +
        "\r\n\r\n" +
        message +
        "\r\n\r\n" +
        stack +
        "\r\n\r\n"
    );
  }

  static async onlineReport(data, params) 
  {
    if (["development", "production"].includes(app.env.toLowerCase())) {
      const header = Log.getReportHeader(data);
      const date = Log.getReportDate(data);
      const message = Log.getReportMessage(data);
      const stack = Log.getStackTrace(data);
      const endpoint =
        params && params.online && params.online.endpoint
          ? params.online.endpoint
          : channels.slack.main.webhook_url;
      const webhook = new IncomingWebhook(endpoint, {
        icon_emoji: ":warning:",
        attachments: [
          {
            color: "#D00000",
            fields: [
              {
                title: header,
                value:
                  "*Date* \r\n " +
                  date +
                  " \r\n\r\n *Message* \r\n " +
                  message +
                  " \r\n\r\n *Stack Trace* \r\n " +
                  stack,
                short: false,
              },
            ],
          },
        ],
      });
      await webhook.send({
        text: "Log Notification",
      });
    }
  }

  static getReportHeader(data) 
  {
    return "[" + app.name + "][" + app.env + "] ";
  }

  static getReportDate(data) 
  {
    return new Date();
  }

  static getReportMessage(data) 
  {
    let message = data;
    if (data instanceof Error) {
      message = data.message;
    }
    else if (data instanceof String) {
      message = data;
    }
    else {
      message = JSON.stringify(data);
    }
    return message;
  }

  static getStackTrace(data) 
  {
    if (data instanceof Error) {
      return data.stack;
    }
    return "< Tidak Ada Stack >";
  }

  static getCurrentDate() 
  {
    const date = new Date();
    return (
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
    );
  }
  
}

module.exports = Log;