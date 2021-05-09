
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Security = require('../../../manipulator/security');

describe('security createRandomSecret method', function() {
  
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
      const randomSecret = Security.createRandomSecret();
    }).to.not.throw('Invalid params');
  });

});