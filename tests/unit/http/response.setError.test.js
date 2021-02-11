
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Response = require('../../../http/response');

describe('response setError', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when set object error', async function() {
    const response = new Response();
    response.setError({
      name: 'KokoRaka'
    });

    expect(response.error.name).to.equal("KokoRaka");
  });
  it('should success when set array error', async function() {
    const response = new Response();
    response.setError([
      {
        name: 'KokoRaka'
      }
    ]);

    expect(response.error[0].name).to.equal("KokoRaka");
  });
  it('should fail when set not object error', async function() {
    const response = new Response();
    response.setError(undefined);

    expect(response.hasOwnProperty('error'))
      .to.equal(false);
  });

});