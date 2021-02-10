
class Response 
{

  constructor(
    code = "200", 
    status = "SUCCESS", 
    message = "ok", 
    data = null,
    error = null
  )
  {
    if (code) {
      this.setCode(code);
    }
    if (status) {
      this.setStatus(status);
    }
    if (message) {
      this.setMessage(message);
    }
    if (data) {
      this.setData(data);
    }
    if (error) {
      this.setError(error);
    }
  }

  setCode(code)
  {
    if (!status) {
      throw new Error('Invalid params');
    }
    this.code = code;
    return this;
  }

  setStatus(status)
  {
    if (!status) {
      throw new Error('Invalid params');
    }
    this.status = status.toUpperCase();
    return this;
  }

  setMessage(message)
  {
    if (!status) {
      throw new Error('Invalid params');
    }
    this.message = message;
    return this;
  }

  setData(data)
  {
    this.data = data;
    return this;
  }

  setError(error)
  {
    this.error = error;
    return this;
  }

  toObject()
  {
    let response = {
      code: this.code,
      message: this.message,
      status: this.status,
    };
    if (this.data) {
      response.data = this.data;
    }
    if (this.error) {
      response.error = this.error;
    }
    return response;
  }

  toJson()
  {
    return this.toObject().toJson();
  }

  success()
  {
    this.code = "200";
    this.status = "SUCCESS";
    this.message = "ok";
    return this;
  }

  error()
  {
    this.code = "400";
    this.status = "ERROR";
    this.message = "error occured";
    return this;
  }

  invalid()
  {
    this.code = "422";
    this.status = "INVALID_DATA";
    this.message = "invalid data";
    return this;
  }

  forbidden()
  {
    this.code = "403";
    this.status = "FORBIDDEN";
    this.message = "forbidden access";
    return this;
  }

  notFound()
  {
    this.code = "404";
    this.status = "NOT_FOUND";
    this.message = "resource notfound";
    return this;
  }

  unauthenticate()
  {
    this.code = "401";
    this.status = "UNAUTHENTICATE";
    this.message = "unauthenticate access";
    return this;
  }

  badGateway()
  {
    this.code = "502";
    this.status = "BAD_GATEWAY";
    this.message = "bad gateway";
    return this;
  }

  requestTimeout()
  {
    this.code = "504";
    this.status = "REQUEST_TIMEOUT";
    this.message = "request timeout";
    return this;
  }

}

module.exports = Response;
