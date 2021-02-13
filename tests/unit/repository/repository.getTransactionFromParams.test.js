
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');
const Repository = require('../../../repository/repository');

describe('repository getTransactionFromParams', function() {
  
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

  it('should success with null when no params passed', async function() {

    const query = userRepo.getTransactionFromParams();
    expect(query).to.be.an('null');

  });
  it('should success with transaction when transaction passed', async function() {

    const query = userRepo.getTransactionFromParams({
      transaction: {}
    });
    expect(query).to.be.an('object');
  });
  it('should success with transaction when option.transaction passed', async function() {

    const query = userRepo.getTransactionFromParams({
      option: {
        transaction: {}
      }
    });
    expect(query).to.be.an('object');

  });

});