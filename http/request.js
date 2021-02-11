
const axios = require('axios');

class Request
{
  
  constructor(params = null)
  {
    if (!params) {
      throw new Error('Invalid params');
    }
    if (params.endpoint) {
      this.endpoint = params.endpoint;
    }
    if (params.config) {
      this.config = params.config;
    }
  }

  async get(url, params = null)
  {
    url = (this.endpoint !== null) ? this.endpoint + '' + url : url;
    if (params && params.config) {
      return await axios.get(url, {
        ...params.config,
        ...this.config,
      });
    }
    return await axios.get(url, this.config);
  }

  async post(url, params = null)
  {
    url = (this.endpoint !== null) ? this.endpoint + '' + url : url;
    if (params && params.config) {
      return await axios.post(url, params.data, {
        ...params.config,
        ...this.config,
      });
    }
    return await axios.post(url, params.data, this.config);
  }

  async all(params)
  {
    if (!params) {
      throw new Error('Invalid params');
    }
    return await axios.all(params.requests);
  }

}

module.exports = Request;