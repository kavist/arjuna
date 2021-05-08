
class Base64 
{

  static encode(params)
  {
    if (!params || !params.data) {
			throw new Error("Invalid params");
		}
		return Buffer.from(params.data).toString('base64');
  }

  static decode(params)
  {
    if (!params || !params.data) {
			throw new Error("Invalid params");
		}
		return Buffer.from(params.data, 'base64').toString('ascii');
  }

}

module.exports = Base64;