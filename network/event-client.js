
const Protobuf = require('../serialization/protobuf');

class EventClient
{

  constructor()
  {
    if (this.constructor === EventClient) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (this.publish === EventClient.prototype.publish) {
      throw new Error("Must override publish method");
    }
    if (this.subscribe === EventClient.prototype.subscribe) {
      throw new Error("Must override subscribe method");
    }
    if (this.enqueue === EventClient.prototype.enqueue) {
      throw new Error("Must override enqueue method");
    }
    if (this.dequeue === EventClient.prototype.dequeue) {
      throw new Error("Must override dequeue method");
    }
  }

  /**
   * @return Buffer
   */
  static async getBufferData(params)
  {
    let bufferData = null;
    if (params.proto && 
      params.proto.name && 
      params.proto.package) {
      bufferData = await Protobuf.encode({
        data: params.data,
        name: params.proto.name,
        package: params.proto.package
      });
    }
    else {
      bufferData = EventClient.getNormalBuffer(params);
    }
    return bufferData;
  }

  /**
   * @return Buffer
   */
  static getNormalBuffer(params)
  {
    let data = (params && params.data) ? params.data : null;
    if (!["string", "Buffer", "ArrayBuffer", "Array"]
      .includes(typeof data)) {
      data = JSON.stringify(data);
    }
    return Buffer.from(data);
  }

}

module.exports = EventClient;