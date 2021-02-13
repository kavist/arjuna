
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');
const Repository = require('../../../repository/repository');

describe('repository update method', function() {
  
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
    await expect(userRepo.update()).to.be.rejectedWith(Error);
  });
  it('should fail when filter is not an object', async function() {
    await expect(
      userRepo.update({
        filter: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when data is not an object', async function() {
    await expect(
      userRepo.update({
        filter: {
          id: 1
        },
        data: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when paranoid is not a boolean', async function() {
    await expect(
      userRepo.update({
        filter: {
          id: 1
        },
        data: {
          username: 'new_username'
        },
        paranoid: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success when filter params is an object', async function() {
    const user = await userRepo.update({
      filter: {
        id: 1
      },
      data: {
        username: 'new_username'
      },
    });

    expect(userRepo.update).to.be.an('function');
    expect(user).to.be.an('array');
    expect(user.length).to.be.equal(1);
    expect(user[0]).to.be.equal(1);
  });

});