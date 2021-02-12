
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const path = require('path');
const Config = require('../../../config/config');

describe('config get method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when no params passed', async function() {
    expect(function() { 
      Config.get();
    }).to.throw('Invalid params');
  });
  it('should fail when no key passed', async function() {
    expect(function() { 
      Config.get({
        key: null
      });
    }).to.throw('Invalid params');
  });

  it('should success when key and value passed', async function() {
    Config.set({
      key: 'name',
      value: 'KokoRaka',
      directory: path.join('utility/storage'),
      file: 'config.json'
    });

    const name = Config.get({
      key: 'name',
      directory: path.join('utility/storage'),
    });
    expect(name).to.be.equal('KokoRaka');
  }); 

});