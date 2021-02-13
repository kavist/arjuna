
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');
const Repository = require('../../../repository/repository');

describe('repository create method', function() {
  
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
    await expect(userRepo.create()).to.be.rejectedWith(Error);
  });
  it('should fail when data is not an object', async function() {
    await expect(
      userRepo.create({
        data: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when option is not an object', async function() {
    await expect(
      userRepo.create({
        data: {
          username: ''
        },
        option: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success when filter params is an object', async function() {
    const username = 'username';
    const user = await userRepo.create({
      data: {
        username: username
      }
    });

    expect(userRepo.create).to.be.an('function');
    expect(user).to.be.an('object');
    expect(user.username).to.be.equal(username);
  });

});