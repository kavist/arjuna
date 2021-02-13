
class Factory
{

  constructor()
  {
    if (this.constructor === Factory) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.create === Factory.prototype.create) {
      throw new Error("Must override create method");
    }
  }

}

module.exports = Factory;