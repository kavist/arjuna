
class Command
{

  constructor()
  {
    if (this.constructor === Command) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.execute === Command.prototype.execute) {
      throw new Error("Must override execute method");
    }
  }

}

module.exports = Command;