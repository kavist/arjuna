
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Request = require('../../../network/request');

describe('request post method', function() {
  
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

  it('should fail when params.url is not a string', async function() {
    await expect(

      request.post({ url: 0 })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when params.data is empty', async function() {
    await expect(

      request.post({ 
        url: 'https://google.com',
        data: null
      })

    ).to.be.rejectedWith(Error);
  });
  it('should success when params.data is available', async function() {

    await request.post({ 
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        hello: 'google'
      }
    })

  });
  
});