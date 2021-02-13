
class Provider
{

  constructor()
  {
    if (this.constructor === Provider) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.register === Provider.prototype.register) {
      throw new Error("Must override register method");
    }
  }

}

module.exports = Provider;