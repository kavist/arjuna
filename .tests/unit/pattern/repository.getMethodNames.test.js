
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../.utility/database');
const SqlModel = require('../../../structure/sql-model');
const Repository = require('../../../pattern/repository');

describe('repository getMethodNames', function() {
  
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
      Repository.getMethodNames();
    }).to.throw('Invalid params');
  });
  it('should fail when no class instance passed', async function() {

    expect(function() { 
      Repository.getMethodNames('invalid_class');
    }).to.throw('Invalid params');
  });
  it('should success when class instance passed', async function() {
    const methodNames = Repository.getMethodNames(userRepo);

    expect(methodNames).to.be.an('array');
    expect(methodNames.length).to.be.greaterThan(0);
  });

});