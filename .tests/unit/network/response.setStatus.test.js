
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response setStatus', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when set valid status', async function() {
    const response = new Response();
    response.setStatus("301");

    expect(response.status).to.equal("301");
  });
  it('should fail when set empty status', async function() {
    const response = new Response();

    expect(function() { 
      response.setStatus(null); 
    }).to.throw('Invalid params');
  });
  it('should fail when set undefined status', async function() {
    const response = new Response();

    expect(function() { 
      response.setStatus(undefined); 
    }).to.throw('Invalid params');
  });
  it('should fail when set not string status', async function() {
    const response = new Response();

    expect(function() { 
      response.setStatus({ invalid: "status" }); 
    }).to.throw('Invalid params');
  });

});