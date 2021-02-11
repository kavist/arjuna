
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../http/response');

describe('response toJson', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when toJson', async function() {
    const response = new Response();
    const jsonData = response.toJson();
    const manualJsonData = JSON.stringify(response.toObject());

    expect(jsonData).to.be.an('string')
      .to.be.equal(manualJsonData);
  });

});