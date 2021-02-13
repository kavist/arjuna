
class DatastoreClient
{
  
  constructor()
  {
    if (this.constructor === DatastoreClient) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.get === DatastoreClient.prototype.get) {
      throw new Error("Must override get method");
    }
    if (this.set === DatastoreClient.prototype.set) {
      throw new Error("Must override set method");
    }
    if (this.del === DatastoreClient.prototype.del) {
      throw new Error("Must override del method");
    }
    if (this.expire === DatastoreClient.prototype.expire) {
      throw new Error("Must override expire method");
    }
    if (this.increment === DatastoreClient.prototype.increment) {
      throw new Error("Must override increment method");
    }
    if (this.decrement === DatastoreClient.prototype.decrement) {
      throw new Error("Must override decrement method");
    }
    if (this.resetCounter === DatastoreClient.prototype.resetCounter) {
      throw new Error("Must override resetCounter method");
    }
    if (this.flushCurrentDb === DatastoreClient.prototype.flushCurrentDb) {
      throw new Error("Must override flushCurrentDb method");
    }
  }

}

module.exports = DatastoreClient;