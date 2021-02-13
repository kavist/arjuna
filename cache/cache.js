
const CacheClient = require('./cache-client');

class Cache
{

  constructor(params)
  {
    if (!params || !params.client) {
      throw new Error("Invalid params");
    }
    if (!(params.client instanceof CacheClient)) {
      throw new Error("Invalid params");
    }
    this.client = params.client;
  }

  async get(key)
  {
    return await this.client.get(key);
  }

  async set(key, value)
  {
    return await this.client.set(key, value);
  }

  async del(key)
  {
    return await this.client.del(key);
  }

  async expire(key, time)
  {
    return await this.client.expire(key, time);
  }

  async increment(key)
  {
    await this.client.increment(key);
    return this;
  }

  async decrement(key)
  {
    await this.client.decrement(key);
    return this;
  }

  async resetCounter(key)
  {
    await this.client.resetCounter(key);
    return this;
  }

  async flushCurrentDb()
  {
    await this.client.flushCurrentDb();
    return this;
  }
  
}

module.exports = Cache;
