
const { Root } = require("protobufjs");

class ProtoBuf 
{

  static async encode(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }
    const root = new Root();
    const protoFile = await root.load(params.name, { keepCase: true });
    const schema = protoFile.lookupType(params.package);
    const err = schema.verify(params.data);
    if (err) {
      throw err;
    }
    const message = schema.create(params.data);
    return schema.encode(message).finish();
  }

  static async decode(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }
    const root = new Root();
    const protoFile = await root.load(params.name, { keepCase: true });
    const schema = protoFile.lookupType(params.package);
    const err = schema.verify(params.data);
    if (err) {
      throw err;
    }
    const message = schema.decode(params.data);
    return schema.toObject(message, {
      longs: String,
    });
  }

  static async verify(params)
  {
    if (!params || !params.data || !params.name || !params.package) {
      throw new Error("Invalid params");
    }
    const root = new Root();
    const protoFile = await root.load(params.name, { keepCase: true });
    const schema = protoFile.lookupType(params.package);
    const err = schema.verify(params.data);
    return err;
  }

}

module.exports = ProtoBuf;