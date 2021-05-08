
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Base64 = require('../../../serialization/base64');

describe('base64 encode method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {
    expect(function() { 
      Base64.encode(null)
    }).to.throw('Invalid params');
  });
  it('should fail when data is invalid', async function() {
    expect(function() { 
      Base64.encode({
        data: undefined
      })
    }).to.throw('Invalid params');
  });
  it('should success with encoded data', async function() {

    const encodedData = Base64.encode({
      data: 'KokoRaka'
    });

    expect(typeof encodedData === "string").to.be.equal(true);
  });

});