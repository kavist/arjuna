
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response helper', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success with success default property', async function() {
    const response = new Response();
    response.success();

    expect(response.code).to.be.equal("200");
    expect(response.status).to.be.equal("SUCCESS");
    expect(response.message).to.be.equal("ok");
  });

  it('should success with error default property', async function() {
    const response = new Response();
    response.error();

    expect(response.code).to.be.equal("400");
    expect(response.status).to.be.equal("ERROR");
    expect(response.message).to.be.equal("error occured");
  });

  it('should success with invalid default property', async function() {
    const response = new Response();
    response.invalid();

    expect(response.code).to.be.equal("422");
    expect(response.status).to.be.equal("INVALID_DATA");
    expect(response.message).to.be.equal("invalid data");
  });

  it('should success with forbidden default property', async function() {
    const response = new Response();
    response.forbidden();

    expect(response.code).to.be.equal("403");
    expect(response.status).to.be.equal("FORBIDDEN");
    expect(response.message).to.be.equal("forbidden access");
  });

  it('should success with notFound default property', async function() {
    const response = new Response();
    response.notFound();

    expect(response.code).to.be.equal("404");
    expect(response.status).to.be.equal("NOT_FOUND");
    expect(response.message).to.be.equal("resource notfound");
  });

  it('should success with unauthenticate default property', async function() {
    const response = new Response();
    response.unauthenticate();

    expect(response.code).to.be.equal("401");
    expect(response.status).to.be.equal("UNAUTHENTICATE");
    expect(response.message).to.be.equal("unauthenticate access");
  });

  it('should success with badGateway default property', async function() {
    const response = new Response();
    response.badGateway();

    expect(response.code).to.be.equal("502");
    expect(response.status).to.be.equal("BAD_GATEWAY");
    expect(response.message).to.be.equal("bad gateway");
  });

  it('should success with requestTimeout default property', async function() {
    const response = new Response();
    response.requestTimeout();

    expect(response.code).to.be.equal("504");
    expect(response.status).to.be.equal("REQUEST_TIMEOUT");
    expect(response.message).to.be.equal("request timeout");
  });

});