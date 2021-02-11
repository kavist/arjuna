
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../text/text');

describe('slugify method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when text is invalid', async function() {
    expect(function() { 
      Text.slugify(null);
    }).to.throw('Invalid text');
  });

  it('should success with sluged data', async function() {
    const slugged = Text.slugify('Raka Suryaardi WIDJAJA');

    expect(slugged).to.equal('raka-suryaardi-widjaja');
  });

});