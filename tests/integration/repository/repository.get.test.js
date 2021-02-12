
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../models/sql-model');
const Repository = require('../../../repositories/repository');

describe('repository get method', function() {
  
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
    await expect(userRepo.get()).to.be.rejectedWith(Error);
  });
  it('should fail when filter params is not an object', async function() {
    await expect(
      userRepo.get({
        filter: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when attributes params is not an object', async function() {
    await expect(
      userRepo.get({
        attributes: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should fail when order params is not an object', async function() {
    await expect(
      userRepo.get({
        order: ''
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success when filter params is an object', async function() {
    const users = await userRepo.get({
      filter: {
        id: 1
      }
    });

    expect(userRepo.get).to.be.an('function');
    expect(users).to.be.an('array');
  });
  it('should success when attributes params is an array', async function() {
    const users = await userRepo.get({
      filter: {
        id: 1
      },
      attributes: [
        'id', 'username'
      ]
    });

    expect(userRepo.get).to.be.an('function');
    expect(users).to.be.an('array');
  });
  it('should success when order params is an array', async function() {
    const users = await userRepo.get({
      filter: {
        id: 1
      },
      order: [
        ['username', 'asc']
      ]
    });

    expect(userRepo.get).to.be.an('function');
    expect(users).to.be.an('array');
  });

});