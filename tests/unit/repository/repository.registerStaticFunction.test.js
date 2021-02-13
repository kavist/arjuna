
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');
const Repository = require('../../../repository/repository');

describe('repository registerStaticFunction', function() {
  
  let userRepo = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    class User extends SqlModel {
      constructor()
      {
        super({
          connection: connection,
          tableName: 'user',
          protecteds: [
            'password'
          ],
          schema: {
            id: {
              type: SqlModel.ORM.BIGINT.UNSIGNED,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
            },
            username: {
              type: SqlModel.ORM.STRING,
            },
          },
        });
      }
    }

    class UserRepo extends Repository { 

      constructor()
      {
        super({
          model: new User()
        });
      }

    }
    
    userRepo = UserRepo;
  });

  afterEach(async function() {
    
  });

  it('should fail when no class instance passed', async function() {

    expect(function() { 
      Repository.registerStaticFunction();
    }).to.throw('Invalid params');
  });
  it('should success when class instance passed', async function() {
    Repository.registerStaticFunction(userRepo, 'getCustomMethod');

    expect(userRepo.getCustomMethod).to.be.an('function');

  });
  it('should fail when method is not registered', async function() {

    expect(function() { 
      Repository.getCustomMethod();
    }).to.throw('Repository.getCustomMethod is not a function');
  });

});