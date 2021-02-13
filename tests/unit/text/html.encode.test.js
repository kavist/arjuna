
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Html = require('../../../text/html');

describe('html encode method', function() {
  
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
      Html.encode(null);
    }).to.throw('Invalid params');
  });

  it('should fail when data is not a text', async function() {

    expect(function() { 
      Html.encode(1);
    }).to.throw('Invalid params');
  });

  it('should success with correct html encoded data', async function() {
    const encodedText = Html.encode('<p>This is a test</p>');

    expect(encodedText)
    .to.equal('&lt;p&gt;This is a test&lt;/p&gt;');
  });

});