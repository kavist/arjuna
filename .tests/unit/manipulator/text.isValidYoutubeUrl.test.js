
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../manipulator/text');

describe('isValidYoutubeUrl method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when url is invalid', async function() {

    expect(function() { 
      Text.isValidYoutubeUrl(null);
    }).to.throw('Invalid url');
  });

  it('should success with invalid status', async function() {
    const isValid = Text.isValidYoutubeUrl('not_valid-');

    expect(isValid).to.equal(false);
  });

  it('should success with valid status', async function() {
    const isValid = Text.isValidYoutubeUrl('https://www.youtube.com/watch?v=Dgmmje5WHWA');

    expect(isValid).to.equal(true);
  });

});