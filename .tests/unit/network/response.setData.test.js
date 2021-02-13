
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response setData', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when set object data', async function() {
    const response = new Response();
    response.setData({
      name: 'KokoRaka'
    });

    expect(response.data.name).to.equal("KokoRaka");
  });
  it('should success when set array data', async function() {
    const response = new Response();
    response.setData([
      {
        name: 'KokoRaka'
      }
    ]);

    expect(response.data[0].name).to.equal("KokoRaka");
  });
  it('should fail when set not object data', async function() {
    const response = new Response();

    expect(function() { 
      response.setData("string"); 
    }).to.throw('Invalid params');
  });

});