
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../text/text');

describe('getYoutubeVideoId method', function() {
  
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
      Text.getYoutubeVideoId(null);
    }).to.throw('Invalid url');
  });

  it('should success with invalid status', async function() {
    expect(function() { 
      Text.getYoutubeVideoId('not_valid-');
    }).to.throw('Invalid youtube url');

  });

  it('should success with valid status', async function() {
    const videoId = Text.getYoutubeVideoId('https://www.youtube.com/watch?v=Dgmmje5WHWA');

    expect(videoId).to.equal('Dgmmje5WHWA');
  });

});