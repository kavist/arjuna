
class Object
{

  static renameKeys(params)
  {
    if (!params || !Array.isArray(params) && params.length === 0) {
      throw new Error('Invalid params');
    }
    const filteredParams = params.filter(param => param.oldKey !== undefined && param.newKey !== undefined);
    for (let index in filteredParams) {
      object = renameKey(
        object, filteredParams[index].oldKey, filteredParams[index].newKey
      );
    }
    return object;
  }

}

module.exports = Object;
