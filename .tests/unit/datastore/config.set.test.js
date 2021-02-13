
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const path = require('path');
const Config = require('../../../datastore/config');

describe('config set method', function() {
  
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
      Config.set();
    }).to.throw('Invalid params');
  });
  it('should fail when no key passed', async function() {
    expect(function() { 
      Config.set({
        key: null
      });
    }).to.throw('Invalid params');
  });
  it('should fail when no value passed', async function() {
    expect(function() { 
      Config.set({
        key: 'key',
        value: undefined
      });
    }).to.throw('Invalid params');
  });

  it('should success when key and value passed', async function() {
    Config.set({
      key: 'name',
      value: 'KokoRaka',
      directory: path.join('.utility/storage')
    });
    const config = require('../../../.utility/storage/config.json');
    expect(config.name).to.be.equal('KokoRaka');
  }); 

  it('should success when custom file passed', async function() {
    Config.set({
      key: 'name',
      value: 'KokoRaka',
      directory: path.join('.utility/storage'),
      file: 'config.json'
    });
    const config = require('../../../.utility/storage/config.json');
    expect(config.name).to.be.equal('KokoRaka');
  }); 

});