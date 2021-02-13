
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../network/response');

describe('response instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when creating instance without default data', async function() {
    const response = new Response();    

    expect(response.code).to.equal("200");
    expect(response.status).to.equal("SUCCESS");
    expect(response.message).to.equal("ok");
  });
  it('should success when creating instance with default data', async function() {
    const response = new Response("999", "CUSTOM", "Custom message", { name: "custom" }, [ { field: "name" } ]);

    expect(response.code).to.equal("999");
    expect(response.status).to.equal("CUSTOM");
    expect(response.message).to.equal("Custom message");
    expect(response.data.name).to.equal("custom");
    expect(response.error[0].field).to.equal("name");
  });
  it('should success when creating instance with invalid data', async function() {
    const response = new Response(null);

    expect(response.code).to.equal("200");
    expect(response.status).to.equal("SUCCESS");
    expect(response.message).to.equal("ok");
  });

});