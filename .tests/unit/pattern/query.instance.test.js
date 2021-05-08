
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Query = require('../../../pattern/query');

describe('query instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to create new instance from abstract class', async function() {

    expect(function() { 
      new Query() 
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when child class has no implement get method', async function() {

    expect(function() { 
      class DetailUser extends Query 
      {
        constructor()
        {
          super();
        }
      }

      new DetailUser();
    }).to.throw('Must override get method');
  });
  it('should success when child class implement get method', async function() {
    class DetailUser extends Query 
    {
      constructor()
      {
        super();
      }

      get()
      {

      }
    }

    const query = DetailUser;
    const instance = new DetailUser();
    expect(query).to.be.an('function');
    expect(instance.get).to.be.an('function');
  });

  it('should success when child class implement static get method', async function() {
    class DetailUser extends Query 
    {
      constructor()
      {
        super();
      }

      static get()
      {
        return 'ok';
      }
    }

    const query = DetailUser;
    const method = query.get();
    expect(query).to.be.an('function');
    expect(query.get).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

  it('should success when child class implement static async get method', async function() {
    class DetailUser extends Query 
    {
      constructor()
      {
        super();
      }

      static async get()
      {
        return 'ok';
      }
    }

    const query = DetailUser;
    const method = await query.get();
    expect(query).to.be.an('function');
    expect(query.get).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

});