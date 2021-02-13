
const DatastoreClient = require('./datastore-client');

class Datastore
{

  static async get(params)
  {
    if (!params || !params.client || !params.key) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    return await params.client.get(params.key);
  }

  static async set(params)
  {
    if (!params || !params.client || 
      !params.key || params.value === undefined) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    return await params.client.set(
      params.key, params.value
    );
  }

  static async del(params)
  {
    if (!params || !params.client || !params.key) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    return await params.client.del(params.key);
  }

  static async expire(params)
  {
    if (!params || !params.client || 
      !params.key || !params.time) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    if (typeof params.time !== "number") {
      throw new Error("Invalid params");
    }
    return await params.client.expire(
      params.key, 
      params.time
    );
  }

  static async increment(params)
  {
    if (!params || !params.client || !params.key) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    if (params.amount !== undefined && 
      typeof params.amount !== "number") {
      throw new Error("Invalid params");
    }
    await params.client.increment(params.key, params.amount || 1);
    return this;
  }

  static async decrement(params)
  {
    if (!params || !params.client || !params.key) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    if (params.amount !== undefined && 
      typeof params.amount !== "number") {
      throw new Error("Invalid params");
    }
    await params.client.decrement(params.key, params.amount || 1);
    return this;
  }

  static async resetCounter(params)
  {
    if (!params || !params.client || !params.key) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    if (typeof params.key !== "string") {
      throw new Error("Invalid params");
    }
    await params.client.resetCounter(params.key);
    return this;
  }

  static async flushCurrentDb(params)
  {
    if (!params || !params.client) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof DatastoreClient)) {
      throw new Error("Invalid params");
    }
    await params.client.flushCurrentDb();
    return this;
  }
  
}

module.exports = Datastore;
