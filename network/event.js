
const Date = require('../manipulator/date');
const EventClient = require('./event-client');

class Event
{

  static async publish(params)
  {
    if (!params || !params.client || !params.exchange_name || !params.data) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof EventClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    console.info(` [*] START PUBLISHING ${params.exchange_name} EXCHANGE`);
    console.info(` [*] DATE: ${Date.getFullDate()}`);

    await params.client.publish(params);

    console.info(` [*] FINISH PUBLISHING ${params.exchange_name} EXCHANGE\n`);
  }

  static async subscribe(params)
  {
    if (!params || !params.client || !params.exchange_name || !params.callback) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof EventClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.exchange_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.callback !== "function") {
      throw new Error("Invalid params");
    }

    console.info(` [*] START SUBSCRIBING ${params.exchange_name} EXCHANGE`);
    console.info(` [*] DATE: ${Date.getFullDate()}`);

    await params.client.subscribe(params);

    console.info(` [*] FINISH SUBSCRIBING ${params.exchange_name} EXCHANGE\n`);
  }

  static async enqueue(params)
  {
    if (!params || !params.connection || !params.queue_name || !params.data) {
      throw new Error("Invalid params");
    }
    if (typeof params.queue_name !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.data !== "object") {
      throw new Error("Invalid params");
    }

    console.info(` [*] START ENQUEUEING ${params.queue_name} QUEUE`);
    console.info(` [*] DATE: ${Date.getFullDate()}`);

    await params.client.enqueue(params);

    console.info(` [*] FINISH ENQUEUEING ${params.queue_name} QUEUE\n`);
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

    console.info(` [*] START DEQUEUEING ${params.queue_name} QUEUE`);
    console.info(` [*] DATE: ${Date.getFullDate()}`);

    await params.client.dequeue(params);

    console.info(` [*] FINISH DEQUEUEING ${params.queue_name} QUEUE\n`);
  }

}

module.exports = Event;