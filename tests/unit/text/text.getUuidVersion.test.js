
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../text/text');

describe('text getUuidVersion method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when uuid is invalid', async function() {

    expect(function() { 
      Text.getUuidVersion(null);
    }).to.throw('Invalid uuid');
  });

  it('should success with uuid invalid when uuid not passed', async function() {
    expect(function() { 
      Text.getUuidVersion('not_valid_uuid');
    }).to.throw('Invalid UUID');
  });

  it('should success with uuid version 4', async function() {
    const uuid = Text.uuid();
    const version = Text.getUuidVersion(uuid);

    expect(version).to.equal(4);
  });

  it('should success with uuid version 1', async function() {
    const uuid = Text.uuid('v1');
    const version = Text.getUuidVersion(uuid);

    expect(version).to.equal(1);
  });

});