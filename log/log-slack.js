
const { IncomingWebhook } = require('@slack/webhook');

const LogMessage = require('./log-message');

class LogSlack
{

  static async send(params)
  {    
    if (!params || !params.data || !params.webhook_url) {
      throw new Error('Invalid params');
    }
    if (!(params.data instanceof LogMessage)) {
      throw new Error('Invalid params');
    }    
    if (typeof params.webhook_url !== "string") {
      throw new Error('Invalid params');
    }
    

    const webhook = new IncomingWebhook(params.webhook_url, {
      icon_emoji: ":warning:",
      attachments: [
        {
          color: "#D00000",
          fields: [
            {
              title: params.data.getReportHeader(),
              value: `
                ${params.data.getReportBody()} \n\r 
                ${params.data.getReportFooter()}
              `,
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

module.exports = LogSlack;