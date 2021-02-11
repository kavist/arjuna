
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Number = require('../../../number/number');

describe('currency method', function() {
  
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
      Number.currency(null);
    }).to.throw('Invalid params');
  });

  it('should success with formated currency', async function() {
    const formatedPrice = Number.currency({
      amount: 10000
    });

    expect(formatedPrice).to.equal('10.000');
  });

  it('should success with prefix formated currency', async function() {
    const formatedPrice = Number.currency({
      amount: 10000,
      prefix: 'IDR'
    });

    expect(formatedPrice).to.equal('IDR10.000');
  });

});