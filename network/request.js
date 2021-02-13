
const axios = require('axios');

class Request
{
  
  constructor(params = null)
  {
    if (params) {
      if (params.endpoint !== undefined && 
        typeof params.endpoint !== "string") {
        throw new Error('Invalid params');
      }
      else {
        this.endpoint = params.endpoint;
      }

      if (params.config !== undefined && 
        typeof params.config !== "object") {
        throw new Error('Invalid params');
      }
      else {
        this.config = params.config;
      }
    }
  }

  async get(params)
  {
    const url = Request.getCompleteUrl({
      endpoint: this.endpoint,
      url: params.url
    });
    const config = Request.getCompleteConfig({
      config: this.config,
      customConfig: params.config
    });

    return await axios.get(url, config);
  }

  async post(params)
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }

    const url = Request.getCompleteUrl({
      endpoint: this.endpoint,
      url: params.url
    });
    const config = Request.getCompleteConfig({
      config: this.config,
      customConfig: params.config
    });

    return await axios.post(url, params.data, config);
  }

  async put(params)
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }

    const url = Request.getCompleteUrl({
      endpoint: this.endpoint,
      url: params.url
    });
    const config = Request.getCompleteConfig({
      config: this.config,
      customConfig: params.config
    });

    return await axios.put(url, params.data, config);
  }

  async patch(params)
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }

    const url = Request.getCompleteUrl({
      endpoint: this.endpoint,
      url: params.url
    });
    const config = Request.getCompleteConfig({
      config: this.config,
      customConfig: params.config
    });

    return await axios.patch(url, params.data, config);
  }

  async delete(params)
  {
    const url = Request.getCompleteUrl({
      endpoint: this.endpoint,
      url: params.url
    });
    const config = Request.getCompleteConfig({
      config: this.config,
      customConfig: params.config
    });

    return await axios.delete(url, config);
  }

  async multiple(params)
  {
    if (!params || !params.requests) {
      throw new Error('Invalid params');
    }
    if (!Array.isArray(params.requests)) {
      throw new Error('Invalid params');
    }
    return await axios.all(params.requests);
  }

  static getCompleteUrl(params)
  {
    let url = '';
    if (typeof params.endpoint === "string") {
      url += `${params.endpoint}`;
    }
    if (typeof params.url === "string") {
      url += `${params.url}`;
    }
    
    return url;
  }

  static getCompleteConfig(params)
  {
    let config = {};
    if (typeof params.config === "object") {
      config = {
        ...config,
        ...params.config
      };
    }
    if (typeof params.customConfig === "object") {
      config = {
        ...config,
        ...params.customConfig
      };
    }
    return config;
  }

}

module.exports = Request;