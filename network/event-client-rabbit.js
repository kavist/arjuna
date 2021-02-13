
const Text = require('../manipulator/text');
const Log = require('../log/log');

const EventClient = require('./event-client');

class EventClientRabbit extends EventClient
{

  constructor(params)
  {
    super();
    if (params) {
      if (params.connection) {
        this.connection = params.connection;
      }
    }
  }

  async publish(params)
  {
    if (!params || !params.exchange_name) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (params.data !== undefined && typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    if (!this.connection && !params.connection) {
      throw new Error("Connection not available");
    }
    const connection = this.connection || params.connection;

    const bufferData = await EventClient.getBufferData(params);
    connection.then(channel => {

      channel.assertExchange(params.exchange_name, 'fanout', {
        durable: false
      }).then(() => { return null; }).catch((err) => Log.report(err));

      channel.publish(params.exchange_name, '', bufferData, {
        persistent: true,
        messageId: Text.uuid('v4')
      });

      return null;
    }).catch(err => Log.report(err));    
  }

  async subscribe(params)
  {
    if (!params || !params.exchange_name || !params.callback) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.callback !== "function") {
      throw new Error("Invalid params");
    }

    if (!this.connection && !params.connection) {
      throw new Error("Connection not available");
    }
    const connection = this.connection || params.connection;

    connection.then(channel => {
      channel.assertExchange(params.exchange_name, 'fanout', {
        durable: false
      }).then(() => { return null }).catch((err) => Log.report(err));

      channel.assertQueue('', { exclusive: true }).then((q) => {
        console.info(" [*] Waiting for messages in %s.", q.queue);

        channel.bindQueue(q.queue, params.exchange_name, '')
          .then(() => { return null; }).catch((err) => Log.report(err));

        channel.consume(q.queue, params.callback, { noAck: true })
          .then(() => { return null; }).catch((err) => Log.report(err));

          return null;
      }).catch(err => Log.report(err));

      return null;
    }).catch((err) => Log.report(err));    
  }

  async enqueue(params)
  {
    if (!params || !params.queue_name) {
      throw new Error("Invalid params");
    }
    if (typeof params.queue_name !== "string") {
      throw new Error("Invalid params");
    }
    if (params.data !== undefined && typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    if (!this.connection && !params.connection) {
      throw new Error("Connection not available");
    }
    const connection = this.connection || params.connection;

    const bufferData = await EventClient.getBufferData(params);
    connection.then(channel => {
      channel.assertQueue(params.queue_name, { durable: true }).then(ok => {

        channel.sendToQueue(params.queue_name, bufferData, {
          persistent: true,
          messageId: Text.uuid('v4')
        });

        return null
      }).catch((err) => Log.report(err));

      return null
    }).catch((err) => Log.report(err));
  }

  async dequeue(params)
  {
    if (!params || !params.queue_name || !params.callback) {
      throw new Error("Invalid params");
    }
    if (typeof params.queue_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.callback !== "function") {
      throw new Error("Invalid params");
    }

    if (!this.connection && !params.connection) {
      throw new Error("Connection not available");
    }
    const connection = this.connection || params.connection;

    connection.then(channel => {

      channel.assertQueue(params.queue_name, { durable: true })
      .then(ok => {
        channel.consume(params.queue_name, params.callback, { noAck: true })
          .then(() => { return null }).catch((err) => Log.report(err));

        return null
      }).catch((err) => Log.report(err)); 

      return null
    }).catch((err) => Log.report(err));
  }

}

module.exports = EventClientRabbit;