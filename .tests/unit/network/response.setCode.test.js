
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response setCode', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when set valid code', async function() {
    const response = new Response();
    response.setCode("301");

    expect(response.code).to.equal("301");
  });
  it('should fail when set empty code', async function() {
    const response = new Response();

    expect(function() { 
      response.setCode(null); 
    }).to.throw('Invalid params');
  });
  it('should fail when set undefined code', async function() {
    const response = new Response();

    expect(function() { 
      response.setCode(undefined); 
    }).to.throw('Invalid params');
  });
  it('should fail when set not string code', async function() {
    const response = new Response();

    expect(function() { 
      response.setCode({ invalid: "code" }); 
    }).to.throw('Invalid params');
  });

});