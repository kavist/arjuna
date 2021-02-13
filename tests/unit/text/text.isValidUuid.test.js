
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Text = require('../../../text/text');

describe('text isValidUuid method', function() {
  
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
      Text.isValidUuid(null);
    }).to.throw('Invalid uuid');
  });

  it('should success with uuid invalid when uuid not passed', async function() {
    const isValidUuid = Text.isValidUuid('not_valid_uuid');

    expect(isValidUuid).to.equal(false);
  });

  it('should success with uuid valid when uuid passed', async function() {
    const uuid = Text.uuid();
    const isValidUuid = Text.isValidUuid(uuid);

    expect(isValidUuid).to.equal(true);
  });

});