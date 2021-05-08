
class Query
{

  constructor()
  {
    if (this.constructor === Query) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.get === Query.prototype.get) {
      throw new Error("Must override get method");
    }
  }

}

module.exports = Query;