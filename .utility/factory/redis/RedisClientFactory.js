
const redis = require('redis');

const RedisClient = require('../../../datastore/redis');
const Log = require('../../../log/log');

let redisClient = null;

class RedisClientFactory
{

  static create(params)
  {
    if (!params || !params.connection) {
      throw new Error("Invalid params");
    }
    if (redisClient === null) {
      redisClient = redis.createClient(params.connection);
    }
    redisClient.on("connect", function(ok) {
      console.info(" [*] Redis connected");
    });
    redisClient.on("ready", function(ok) {
      console.info(" [*] Redis connection is ready to use");
    });
    redisClient.on("error", function(err) {
      console.warn(` [*] Redis connection error occured`, err);
      Log.report(err);
    });
    
    return new RedisClient({
      client: redisClient
    });
  }

}

module.exports = RedisClientFactory;