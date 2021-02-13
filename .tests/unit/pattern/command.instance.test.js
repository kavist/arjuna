
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Command = require('../../../pattern/command');

describe('command instance', function() {
  
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
      new Command() 
    }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when child class has no implement execute method', async function() {

    expect(function() { 
      class CreateUser extends Command 
      {
        constructor()
        {
          super();
        }
      }

      new CreateUser();
    }).to.throw('Must override execute method');
  });
  it('should success when child class implement execute method', async function() {
    class CreateUser extends Command 
    {
      constructor()
      {
        super();
      }

      execute()
      {

      }
    }

    const command = CreateUser;
    const instance = new CreateUser();
    expect(command).to.be.an('function');
    expect(instance.execute).to.be.an('function');
  });

  it('should success when child class implement static execute method', async function() {
    class CreateUser extends Command 
    {
      constructor()
      {
        super();
      }

      static execute()
      {
        return 'ok';
      }
    }

    const command = CreateUser;
    const method = command.execute();
    expect(command).to.be.an('function');
    expect(command.execute).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

  it('should success when child class implement static async execute method', async function() {
    class CreateUser extends Command 
    {
      constructor()
      {
        super();
      }

      static async execute()
      {
        return 'ok';
      }
    }

    const command = CreateUser;
    const method = await command.execute();
    expect(command).to.be.an('function');
    expect(command.execute).to.be.an('function');
    expect(method).to.be.an('string').to.be.equal('ok');
  });

});