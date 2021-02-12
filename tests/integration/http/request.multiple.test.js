
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Request = require('../../../http/request');

describe('request multiple method', function() {
  
  let request = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    request = new Request();
  });

  afterEach(async function() {
    
  });

  it('should fail when params.requests is not an array', async function() {
    await expect(

      request.multiple({ requests: 0 })

    ).to.be.rejectedWith(Error);
  });
  it('should success when params.requests is valid array', async function() {

    const requests = [
      request.get({ 
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        data: {
          hello: 'google'
        }
      }),
      request.get({ 
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
          hello: 'google'
        }
      }),
    ];
    const responses = await request.multiple({
      requests: requests
    });

    expect(responses).to.be.an('array');
    expect(responses.length).to.be.equal(2);
    expect(responses[0].status).to.be.equal(200);
    expect(responses[1].status).to.be.equal(200);

  });
  
});