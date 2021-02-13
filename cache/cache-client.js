
class CacheClient
{
  
  constructor()
  {
    if (this.constructor === CacheClient) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.get === CacheClient.prototype.get) {
      throw new Error("Must override get method");
    }
    if (this.set === CacheClient.prototype.set) {
      throw new Error("Must override set method");
    }
    if (this.del === CacheClient.prototype.del) {
      throw new Error("Must override del method");
    }
    if (this.expire === CacheClient.prototype.expire) {
      throw new Error("Must override expire method");
    }
    if (this.increment === CacheClient.prototype.increment) {
      throw new Error("Must override increment method");
    }
    if (this.decrement === CacheClient.prototype.decrement) {
      throw new Error("Must override decrement method");
    }
    if (this.resetCounter === CacheClient.prototype.resetCounter) {
      throw new Error("Must override resetCounter method");
    }
    if (this.flushCurrentDb === CacheClient.prototype.flushCurrentDb) {
      throw new Error("Must override flushCurrentDb method");
    }
  }

}

module.exports = CacheClient;