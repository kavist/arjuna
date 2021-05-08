
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Base64 = require('../../../serialization/base64');

describe('base64 decode method', function() {
  
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
      Base64.decode(null)
    }).to.throw('Invalid params');
  });
  it('should fail when data is invalid', async function() {
    expect(function() { 
      Base64.decode({
        data: undefined
      })
    }).to.throw('Invalid params');
  });
  it('should success with decoded data', async function() {
    const encodedData = Base64.encode({
      data: 'KokoRaka'
    });

    const decodedData = Base64.decode({
      data: encodedData
    });

    expect(decodedData).to.be.equal('KokoRaka');
  });

});