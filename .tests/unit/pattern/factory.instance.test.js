
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Factory = require('../../../pattern/factory');

describe('factory instance', function() {
  
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
      new Factory() 
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when child class has no implement create method', async function() {

    expect(function() { 
      class CreateUser extends Factory 
      {
        constructor()
        {
          super();
        }
      }

      new CreateUser();
    }).to.throw('Must override create method');
  });
  it('should success when child class implement create method', async function() {
    class CreateUser extends Factory 
    {
      constructor()
      {
        super();
      }

      create()
      {

      }
    }

    const factory = CreateUser;
    const instance = new CreateUser();
    expect(factory).to.be.an('function');
    expect(instance.create).to.be.an('function');
  });

  it('should success when child class implement static create method', async function() {
    class CreateUser extends Factory 
    {
      constructor()
      {
        super();
      }

      static create()
      {
        return 'ok';
      }
    }

    const factory = CreateUser;
    const method = factory.create();
    expect(factory).to.be.an('function');
    expect(factory.create).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

  it('should success when child class implement static async create method', async function() {
    class CreateUser extends Factory 
    {
      constructor()
      {
        super();
      }

      static async create()
      {
        return 'ok';
      }
    }

    const factory = CreateUser;
    const method = await factory.create();
    expect(factory).to.be.an('function');
    expect(factory.create).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

});