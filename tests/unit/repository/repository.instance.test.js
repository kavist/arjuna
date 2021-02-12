
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../models/sql-model');
const Repository = require('../../../repositories/repository');

describe('repository instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to create new instance from abstract class', async function() {

    expect(function() { new Repository() }).to.throw('Cannot construct abstract instances directly');
  });
  it('should success when creating instance from child class', async function() {

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
    
    const user = new UserRepo();
    const equalInstance = user instanceof Repository;

    expect(equalInstance).to.equal(true);

  });

});