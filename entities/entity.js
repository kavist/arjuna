
class Entity
{

  constructor()
  {
    if (this.constructor === Entity) {
      throw new Error("Cannot construct abstract instances directly");
    }
  }

  setParams(params, validParams = null)
  {
    for (const param in params) {
      if (!validParams || (Array.isArray(validParams) && validParams.includes(param))) {
        this[param] = params[param];
      }
    }
    return this;
  }

}

module.exports = Entity;