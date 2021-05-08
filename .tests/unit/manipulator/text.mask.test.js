
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../manipulator/text');

describe('text mask method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {

    expect(function() { 
      Text.mask(null);
    }).to.throw('Invalid params');
  });

  it('should fail when params.value is not a valid string', async function() {

    expect(function() { 
      Text.mask({
        value: []
      });
    }).to.throw('Invalid value');
  });

  it('should fail when params.masker is present and its not a valid string', async function() {
    expect(function() { 
      Text.mask({
        value: "random",
        masker: []
      });
    }).to.throw('Invalid masker');
  });

  it('should success when params.value is valid string', async function() {
    const masked = Text.mask({
      value: "Kode PIN"
    });

    expect(typeof masked === "string").to.equal(true);
  });

  it('should success when params.mask is valid string', async function() {
    const masker = Text.mask({
      value: "masked",
      masker: "-"
    });

    expect(typeof masker === "string").to.equal(true);
  });

  it('should success with valid masker position', async function() {
    const masked = Text.mask({
      value: "Kode PIN"
    });

    expect(typeof masked === "string").to.equal(true);
    expect(masked).to.equal("**de PI*");
  });

  it('should success with custom masker', async function() {
    const masked = Text.mask({
      value: "Kode PIN",
      masker: "~"
    });

    expect(typeof masked === "string").to.equal(true);
    expect(masked).to.equal("~~de PI~");
  });

});