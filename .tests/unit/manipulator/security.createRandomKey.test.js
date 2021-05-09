
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Security = require('../../../manipulator/security');

describe('security createRandomKey method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when no params is passed', async function() {
    expect(function() { 
      const randomKey = Security.createRandomKey();
    }).to.not.throw('Invalid params');
  });

});