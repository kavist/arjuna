
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { sql: connection } = require('../../../.utility/database');
const SqlModel = require('../../../structure/sql-model');
const Repository = require('../../../pattern/repository');

describe('repository insert method', function() {
  
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
    await expect(userRepo.insert()).to.be.rejectedWith(Error);
  });
  it('should fail when data is not an array', async function() {
    await expect(
      userRepo.insert({
        data: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when option is not an object', async function() {
    await expect(
      userRepo.insert({
        data: {
          username: ''
        },
        option: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success when data is valid', async function() {
    const users = await userRepo.insert({
      data: [
        {
          username: 'username'
        }
      ]
    });

    expect(userRepo.insert).to.be.an('function');
    expect(users).to.be.an('array');
    expect(users.length).to.be.equal(1);
    expect(users[0].username).to.be.equal('username');
  });

});