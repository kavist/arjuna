
class Object
{

  /**
   * 
   * @param {Array} params.data 
   * @returns 
   */
  static renameKeys(params)
  {
    if (!params || !params.data || 
      !Array.isArray(params.data) && params.data.length === 0) {
      throw new Error('Invalid params');
    }

    const filteredParams = params.data.filter(object => {
      return object.oldKey !== undefined && 
        object.newKey !== undefined &&
        typeof object.oldKey === "string" &&
        typeof object.newKey === "string";
    });
    if (filteredParams.length !== params.data.length) {
      throw new Error("Data contain invalid property");
    }

    for (let index in filteredParams) {
      object = renameKey(
        object, 
        filteredParams[index].oldKey, 
        filteredParams[index].newKey
      );
    }
    return object;
  }

}

module.exports = Object;

function renameKey(object, oldKey, newKey)
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
