
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Provider = require('../../../pattern/provider');

describe('provider instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to register new instance from abstract class', async function() {

    expect(function() { 
      new Provider() 
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when child class has no implement register method', async function() {

    expect(function() { 
      class CreateUser extends Provider 
      {
        constructor()
        {
          super();
        }
      }

      new CreateUser();
    }).to.throw('Must override register method');
  });
  it('should success when child class implement register method', async function() {
    class CreateUser extends Provider 
    {
      constructor()
      {
        super();
      }

      register()
      {

      }
    }

    const provider = CreateUser;
    const instance = new CreateUser();
    expect(provider).to.be.an('function');
    expect(instance.register).to.be.an('function');
  });

  it('should success when child class implement static register method', async function() {
    class CreateUser extends Provider 
    {
      constructor()
      {
        super();
      }

      static register()
      {
        return 'ok';
      }
    }

    const provider = CreateUser;
    const method = provider.register();
    expect(provider).to.be.an('function');
    expect(provider.register).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

  it('should success when child class implement static async register method', async function() {
    class CreateUser extends Provider 
    {
      constructor()
      {
        super();
      }

      static async register()
      {
        return 'ok';
      }
    }

    const provider = CreateUser;
    const method = await provider.register();
    expect(provider).to.be.an('function');
    expect(provider.register).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

});