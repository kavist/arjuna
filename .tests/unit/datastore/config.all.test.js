
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const path = require('path');
const Config = require('../../../datastore/config');

describe('config all method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when key and value passed', async function() {
    const configs = Config.all({
      directory: path.join('.utility/storage'),
      file: 'config.json'
    });

    expect(configs).to.be.an('object')
      .that.has.keys('name');

  }); 

});