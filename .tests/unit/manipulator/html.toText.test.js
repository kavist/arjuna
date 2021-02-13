
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Html = require('../../../manipulator/html');

describe('html toText method', function() {
  
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
      Html.toText(null);
    }).to.throw('Invalid params');
  });

  it('should fail when data is not a text', async function() {

    expect(function() { 
      Html.toText(1);
    }).to.throw('Invalid params');
  });

  it('should success with correct text converted data', async function() {
    const decodedText = Html.toText('<p>This is a test</p>');

    expect(decodedText).to.equal('This is a test');
  });

});