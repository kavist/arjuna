
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response setMessage', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when set valid message', async function() {
    const response = new Response();
    response.setMessage("301");

    expect(response.message).to.equal("301");
  });
  it('should fail when set empty message', async function() {
    const response = new Response();

    expect(function() { 
      response.setMessage(null); 
    }).to.throw('Invalid params');
  });
  it('should fail when set undefined message', async function() {
    const response = new Response();

    expect(function() { 
      response.setMessage(undefined); 
    }).to.throw('Invalid params');
  });
  it('should fail when set not string message', async function() {
    const response = new Response();

    expect(function() { 
      response.setMessage({ invalid: "message" }); 
    }).to.throw('Invalid params');
  });

});