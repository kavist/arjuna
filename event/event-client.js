
class EventClient
{

  constructor()
  {
    if (this.constructor === EventClient) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.publish === EventClient.prototype.publish) {
      throw new Error("Must override publish method");
    }
    if (this.subscribe === EventClient.prototype.subscribe) {
      throw new Error("Must override subscribe method");
    }
    if (this.enqueue === EventClient.prototype.enqueue) {
      throw new Error("Must override enqueue method");
    }
    if (this.dequeue === EventClient.prototype.dequeue) {
      throw new Error("Must override dequeue method");
    }
  }

}

module.exports = EventClient;