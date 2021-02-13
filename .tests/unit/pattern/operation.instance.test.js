
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Operation = require('../../../pattern/operation');

describe('operation instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to run new instance from abstract class', async function() {

    expect(function() { 
      new Operation() 
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when child class has no implement run method', async function() {

    expect(function() { 
      class CreateUser extends Operation 
      {
        constructor()
        {
          super();
        }
      }

      new CreateUser();
    }).to.throw('Must override run method');
  });
  it('should success when child class implement run method', async function() {
    class CreateUser extends Operation 
    {
      constructor()
      {
        super();
      }

      run()
      {

      }
    }

    const operation = CreateUser;
    const instance = new CreateUser();
    expect(operation).to.be.an('function');
    expect(instance.run).to.be.an('function');
  });

  it('should success when child class implement static run method', async function() {
    class CreateUser extends Operation 
    {
      constructor()
      {
        super();
      }

      static run()
      {
        return 'ok';
      }
    }

    const operation = CreateUser;
    const method = operation.run();
    expect(operation).to.be.an('function');
    expect(operation.run).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

  it('should success when child class implement static async run method', async function() {
    class CreateUser extends Operation 
    {
      constructor()
      {
        super();
      }

      static async run()
      {
        return 'ok';
      }
    }

    const operation = CreateUser;
    const method = await operation.run();
    expect(operation).to.be.an('function');
    expect(operation.run).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

});