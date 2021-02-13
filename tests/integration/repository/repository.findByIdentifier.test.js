
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');
const Repository = require('../../../repository/repository');

describe('repository findByIdentifier method', function() {
  
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

    userRepo = new UserRepo();
  });

  afterEach(async function() {
    
  });

  it('should fail when no params passed', async function() {
    await expect(userRepo.findByIdentifier()).to.be.rejectedWith(Error);
  });
  it('should fail when identifier is not an object', async function() {
    await expect(
      userRepo.findByIdentifier({
        identifier: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when columns is not an array', async function() {
    await expect(
      userRepo.findByIdentifier({
        identifier: 1,
        columns: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success when filter params is an object', async function() {
    const user = await userRepo.findByIdentifier({
      identifier: 1,
      columns: [
        'id', 'username'
      ]
    });

    expect(userRepo.findByIdentifier).to.be.an('function');
    expect(user).to.be.an('object');
    expect(user.id).to.be.equal(1);
  });

});