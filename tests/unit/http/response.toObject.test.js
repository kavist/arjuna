
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../http/response');

describe('response toObject', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when toObject', async function() {
    const response = new Response();
    const object = response.toObject();

    expect(object).to.be.an('object');
  });
  it('should success with code, message, status available', async function() {
    const response = new Response();
    const object = response.toObject();

    expect(object.code).to.be.an('string');
    expect(object.message).to.be.an('string');
    expect(object.status).to.be.an('string');
  });
  it('should success with data available', async function() {
    const response = new Response();
    response.setData({
      name: 'KokoRaka'
    });
    const object = response.toObject();

    expect(object.data).to.be.an('object')
      .to.have.keys('name');
    expect(object.data.name).to.be.an('string')
      .to.be.equal('KokoRaka');
  });
  it('should success with error available', async function() {
    const response = new Response();
    response.setError({
      field: 'name'
    });
    const object = response.toObject();

    expect(object.error).to.be.an('object')
      .to.have.keys('field');
    expect(object.error.field).to.be.an('string')
      .to.be.equal('name');
  });

});