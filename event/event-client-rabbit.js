
const Text = require('../text/text');
const Protobuf = require('../serialization/protobuf');
const Log = require('../log/log');

const EventClient = require('./event-client');

class EventClientRabbit extends EventClient
{

  static async publish(params)
  {
    if (!params || !params.connection || !params.exchange_name) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (params.data !== undefined && typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    params.connection.then(channel => {

      channel.assertExchange(params.exchange_name, 'fanout', {
        durable: false
      }).then(() => { return null; }).catch((err) => Log.report(err));

      channel.publish(params.exchange_name, '', await Event.getBufferData(params), {
        persistent: true,
        messageId: Text.uuid('v4')
      });

      return null;
    }).catch(err => Log.report(err));    
  }

  static async subscribe(params)
  {
    if (!params || !params.connection || !params.exchange_name || !params.callback) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.callback !== "function") {
      throw new Error("Invalid params");
    }

    params.connection.then(channel => {
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

  static async enqueue(params)
  {
    if (!params || !params.connection || !params.queue_name) {
      throw new Error("Invalid params");
    }
    if (typeof params.queue_name !== "string") {
      throw new Error("Invalid params");
    }
    if (params.data !== undefined && typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    params.connection.then(channel => {
      channel.assertQueue(params.queue_name, { durable: true }).then(ok => {

        channel.sendToQueue(params.queue_name, await Event.getBufferData(params), {
          persistent: true,
          messageId: Text.uuid('v4')
        });

        return null
      }).catch((err) => Log.report(err));

      return null
    }).catch((err) => Log.report(err));
  }

  static async dequeue(params)
  {
    if (!params || !params.connection || !params.queue_name || !params.callback) {
      throw new Error("Invalid params");
    }
    if (typeof params.queue_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.callback !== "function") {
      throw new Error("Invalid params");
    }

    params.connection.then(channel => {

      channel.assertQueue(params.queue_name, { durable: true })
      .then(ok => {
        channel.consume(params.queue_name, params.callback, { noAck: true })
          .then(() => { return null }).catch((err) => Log.report(err));

        return null
      }).catch((err) => Log.report(err)); 

      return null
    }).catch((err) => Log.report(err));
  }

  static async getBufferData(params)
  {
    let bufferData = null
    if (params.proto && params.proto.name && params.proto.package && params.data) {
      bufferData = await Protobuf.encode({
        data: params.data,
        name: params.proto.name,
        package: params.proto.package
      });      
    }
    else {
      bufferData = Buffer.from(params.data || null);
    }
    return bufferData;
  }

}

module.exports = EventClientRabbit;