
class Operation
{

  constructor()
  {
    if (this.constructor === Operation) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.run === Operation.prototype.run) {
      throw new Error("Must override run method");
    }
  }

}

module.exports = Operation;