
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Request = require('../../../network/request');

describe('request getCompleteUrl method', function() {
  
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

  it('should success when endpoint is not a string', async function() {
    const result = request.getCompleteUrl({
      endpoint: {}
    });

    expect(result).to.be.an('string')
      .to.equal('');
  });
  it('should success when endpoint is undefined', async function() {
    const result = request.getCompleteUrl({
      endpoint: undefined
    });

    expect(result).to.be.an('string')
      .to.equal('');
  });
  it('should success when endpoint is null', async function() {

    const result = request.getCompleteUrl({
      endpoint: null
    });

    expect(result).to.be.an('string')
      .to.equal('');

  });

  it('should success when url is not a string', async function() {
    const result = request.getCompleteUrl({
      url: {}
    });

    expect(result).to.be.an('string')
      .to.equal('');
  });
  it('should success when url is undefined', async function() {
    const result = request.getCompleteUrl({
      url: undefined
    });

    expect(result).to.be.an('string')
      .to.equal('');
  });
  it('should success when url is null', async function() {

    const result = request.getCompleteUrl({
      url: null
    });

    expect(result).to.be.an('string')
      .to.equal('');

  });

  it('should success when endpoint is not a string and url is a string', async function() {
    const result = request.getCompleteUrl({
      endpoint: {},
      url: 'https://idaman.id'
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');
  });
  it('should success when endpoint is undefined and url is a string', async function() {
    const result = request.getCompleteUrl({
      endpoint: undefined,
      url: 'https://idaman.id'
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');
  });
  it('should success when endpoint is null and url is a string', async function() {

    const result = request.getCompleteUrl({
      endpoint: null,
      url: 'https://idaman.id'
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');

  });


  it('should success when endpoint is a string and url is not a string', async function() {
    const result = request.getCompleteUrl({
      endpoint: 'https://idaman.id',
      url: {}
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');
  });
  it('should success when endpoint is a string and url is undefined', async function() {
    const result = request.getCompleteUrl({
      endpoint: 'https://idaman.id',
      url: undefined
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');
  });
  it('should success when endpoint is a string and url is a null', async function() {

    const result = request.getCompleteUrl({
      endpoint: 'https://idaman.id',
      url: null
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id');

  });


  it('should success when endpoint is a string and url is a string', async function() {
    const result = request.getCompleteUrl({
      endpoint: 'https://idaman.id',
      url: '/user'
    });

    expect(result).to.be.an('string')
      .to.equal('https://idaman.id/user');
  });

});