
const amqp = require('amqplib');
const Log = require('../../../log/log');

class ConnectionFactory
{

  static create(params)
  {
    if (!params || !params.connectionName || !params.connectionString) {
      throw new Error("Invalid params");
    }
    return amqp.connect(params.connectionString)
      .then((connection) => {
        Log.report(`AMQP ${params.connectionName} connection has been established successfully.`);
        return connection.createChannel();
      }).catch(err => {
        Log.report(`Unable to connect to AMQP ${params.connectionName}` + err);
      });
  }

}


module.exports = ConnectionFactory;