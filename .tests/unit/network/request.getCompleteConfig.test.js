
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Request = require('../../../network/request');

describe('request getCompleteConfig method', function() {
  
  let request = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    request = Request;
  });

  afterEach(async function() {
    
  });

  it('should success when config is not a string', async function() {
    const result = request.getCompleteConfig({
      config: {}
    });

    expect(result).to.be.an('object');
  });
  it('should success when config is undefined', async function() {
    const result = request.getCompleteConfig({
      config: undefined
    });

    expect(result).to.be.an('object');
  });
  it('should success when config is null', async function() {

    const result = request.getCompleteConfig({
      config: null
    });

    expect(result).to.be.an('object');

  });

  it('should success when customConfig is not a string', async function() {
    const result = request.getCompleteConfig({
      customConfig: {}
    });

    expect(result).to.be.an('object');
  });
  it('should success when customConfig is undefined', async function() {
    const result = request.getCompleteConfig({
      customConfig: undefined
    });

    expect(result).to.be.an('object');
  });
  it('should success when customConfig is null', async function() {

    const result = request.getCompleteConfig({
      customConfig: null
    });

    expect(result).to.be.an('object');

  });

  it('should success when config is not a string and customConfig is a string', async function() {
    const result = request.getCompleteConfig({
      config: {
        field1: 'value1'
      },
      customConfig: 'https://idaman.id'
    });

    expect(result).to.be.an('object');
    expect(result.field1).to.be.equal('value1');
  });
  it('should success when config is undefined and customConfig is a object', async function() {
    const result = request.getCompleteConfig({
      config: undefined,
      customConfig: {
        field2: 'value2'
      },
    });

    expect(result).to.be.an('object');
    expect(result.field2).to.be.equal('value2');
  });
  it('should success when config is null and customConfig is a object', async function() {

    const result = request.getCompleteConfig({
      config: null,
      customConfig: {
        field2: 'value2'
      },
    });

    expect(result).to.be.an('object');
    expect(result.field2).to.be.equal('value2');
  });


  it('should success when config is an object and customConfig is an object', async function() {
    const result = request.getCompleteConfig({
      config: {
        field1: 'value1'
      },
      customConfig: {
        field2: 'value2'
      }
    });

    expect(result).to.be.an('object');
    expect(result.field1).to.be.equal('value1');
    expect(result.field2).to.be.equal('value2');
  });

});