
const { Root } = require("protobufjs");

class Protobuf 
{

  static async createSchema(params)
  {
    if (!params || !params.name || !params.package) {
      throw new Error("Invalid params");
    }
    const root = new Root();
    const protoFile = await root.load(params.name, { keepCase: true });
    return protoFile.lookupType(params.package);
  }

  /**
   * encode data (params.data) according to proto specification 
   * (params.name & params.package)
   */
  static async encode(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }

    const schema = await Protobuf.createSchema(params);
    const sanitizedData = sanitizeData(params.data);
    const err = schema.verify(sanitizedData);
    if (err) {
      throw new Error(err);
    }
    const message = schema.create(sanitizedData);
    return schema.encode(message).finish();
  }

  static async decode(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }

    const schema = await Protobuf.createSchema(params);    
    const message = schema.decode(params.data);
    return schema.toObject(message, {
      longs: String,
    });
  }

  /**
   * verify plain javascript object (params.data) 
   * match defined message (params.name)
   * @return boolean
   */
  static async verify(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }

    const schema = await Protobuf.createSchema(params);
    const err = schema.verify(params.data);
    return (err === null);
  }

}

module.exports = Protobuf;

/**
 * Change all data property which contains @param {Date} data type into string 
 * Its both painful & annoying to change data type 
 * from other source into supported data type manually (string or integer)
 * 
 * @param {*} data 
 * @returns data
 */
function sanitizeData(data)
{
  if (data instanceof Date) {
    return data.toISOString();
  }
  else if ((data && data.constructor.name === "Object") || Array.isArray(data)) {
    for (let index in data) {
      data[index] = sanitizeData(data[index]);
    }
  }
  return data;
}
