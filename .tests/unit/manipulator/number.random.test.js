
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Number = require('../../../manipulator/number');

describe('random method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when length is invalid', async function() {

    expect(function() { 
      Number.random(null);
    }).to.throw('Invalid length');
  });

  it('should fail when length is not a number', async function() {

    expect(function() { 
      Number.random('1');
    }).to.throw('Invalid length');
  });

  it('should success with correct lengths', async function() {
    const randomStrings = Number.random(30);

    expect(randomStrings.length).to.equal(30);
  });

  it('should success with higher lengths', async function() {
    const randomStrings = Number.random(1000000);

    expect(randomStrings.length).to.equal(1000000);
  });

});