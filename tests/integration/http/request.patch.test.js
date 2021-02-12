
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Request = require('../../../http/request');

describe('request patch method', function() {
  
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

      request.patch({ url: 0 })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when params.data is empty', async function() {
    await expect(

      request.patch({ 
        url: 'https://google.com',
        data: null
      })

    ).to.be.rejectedWith(Error);
  });
  it('should success when params.data is available', async function() {

    await request.patch({ 
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      data: {
        hello: 'google'
      }
    })

  });
  
});