
const { type } = require("os");
const { promisify } = require("util");

const Log = require('../log/log');

const CacheClient = require('./cache-client');

class CacheClientRedis extends CacheClient
{

  constructor(params)
  {
    super();
    if (!params || !params.client) {
      throw new Error("Invalid params");
    }
    this.client = params.client;
    
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
    this.expireAsync = promisify(this.client.expire).bind(this.client);
  }

  async get(key)
  {
    if (!key) {
      throw new Error("Invalid params");
    }
    return await this.getAsync(key);
  }

  async set(key, value)
  {
    if (!key || value === undefined) {
      throw new Error("Invalid params");
    }    
    if (typeof value !== "string" && 
      typeof value !== "dates" && 
      typeof value !== "buffers") {
      throw new Error("Invalid params");
    }
    return await this.setAsync(key, value);
  }

  async del(key)
  {
    if (!key) {
      throw new Error("Invalid params");
    }
    return await this.delAsync(key);
  }

  /**
   * @param {string} key 
   * @param {numeric} time in seconds
   */
  async expire(key, time)
  {
    if (!key || !time) {
      throw new Error("Invalid params");
    }
    return await this.expireAsync(key, time);
  }

  async increment(key)
  {
    let counter = await this.get(key);
    counter = counter || 0;
    counter++;
    this.client.set(key, counter, counterCallback);

    console.info(` [*] Incrementing ${key} to: ${counter}`);
    return this;
  }

  async decrement(key)
  {
    let counter = await this.get(key);
    counter = counter || 0;
    counter = counter > 0 ? counter - 1 : 0;
    this.client.set(key, counter, counterCallback);

    console.info(` [*] Decrementing ${key} to: ${counter}`);
    return this;
  }

  async resetCounter(key)
  {
    this.client.set(key, 0, counterCallback);

    console.info(` [*] Reset counter for: ${key}`);
    return this;
  }

  async flushCurrentDb()
  {
    this.client.flushdb(function(ok) {      
    	console.info(" [*] Redis reset", ok);
    });
    return this;
  }
  
}

module.exports = CacheClientRedis;

const counterCallback = function(err, value) {
  if (err) {
    console.warn(` [*] Failed set data`, err);
    Log.report(err);
  }
  else {
    console.info(` [*] Success set data`);
    console.info(` [*] Redis response`, value);
  }
}