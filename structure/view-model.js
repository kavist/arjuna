
class ViewModel
{

  constructor()
  {
    if (this.constructor === ViewModel) {
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

  toObject()
  {
    let object = {};
    const members = Object.keys(this);
    for (let index in members) {
      object[members[index]] = this[members[index]];
    }
    return object;
  }
  
  toJson()
  {
    return JSON.stringify(this.toObject());
  }

}

module.exports = ViewModel;