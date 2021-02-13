
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { validate, version } = require('uuid');
const Text = require('../../../text/text');

describe('text uuid method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when version is invalid', async function() {

    expect(function() { 
      Text.uuid(null);
    }).to.throw('Invalid version');
  });

  it('should fail when version is not supported', async function() {

    expect(function() { 
      Text.uuid('v9');
    }).to.throw('Unsupported uuid version');
  });

  it('should success with valid uuid version 1', async function() {
    const uuid = Text.uuid('v1');

    expect(validate(uuid)).to.equal(true);
    expect(version(uuid)).to.equal(1);
  });

  it('should success with valid uuid version 4', async function() {
    const uuid = Text.uuid('v4');

    expect(validate(uuid)).to.equal(true);
    expect(version(uuid)).to.equal(4);
  });

});