
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Request = require('../../../http/request');

describe('request instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when endpoint is not a string', async function() {
    expect(function() { 
      new Request({
        endpoint: {}
      }) 
    }).to.throw('Invalid params');
  });
  it('should fail when config is not an object', async function() {
    expect(function() { 
      new Request({
        config: ''
      }) 
    }).to.throw('Invalid params');
  });
  it('should success when creating instance without parameters', async function() {

    const request = new Request();

    expect(request).to.be.an('object');

  });

});