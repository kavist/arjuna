
class Objects
{

  /**
   * @param {Object} params
   * @returns 
   */
  static renameKey(params)
  {
    if (!params || !params.data || !params.keys) {
      throw new Error('Invalid params');
    }
    if (Object.prototype.toString.call(params.data) !== "[object Object]") {
      throw new Error('Data should be an object');
    }
    if (!Array.isArray(params.keys) || params.keys.length === 0) {
      throw new Error('Keys should be valid array containing at least on element');
    }

    const filteredParams = params.keys.filter(param => {
      return param.oldKey !== undefined && 
        param.newKey !== undefined &&
        typeof param.oldKey === "string" &&
        typeof param.newKey === "string";
    });
    if (filteredParams.length !== params.keys.length) {
      throw new Error("Keys contain invalid property");
    }

    let data = params.data;
    for (let index in filteredParams) {
      data = changeKey(
        data, filteredParams[index].oldKey, filteredParams[index].newKey
      );
    }
    return data;
  }

}

module.exports = Objects;

function changeKey(object, oldKey, newKey)
{
  /** 
   * KEY IS SAME
   */
  if (oldKey === newKey) {
    return object;
  }

  /** 
   * ONLY CHANGE INTO NEWKEY WHEN OLDKEY IS AVAILABLE
   */
  if (object.hasOwnProperty(oldKey)) {
    object[newKey] = object[oldKey];
    delete object[oldKey];
  }
	return object;
}
