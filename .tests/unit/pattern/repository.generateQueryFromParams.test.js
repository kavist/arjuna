
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../.utility/database');
const SqlModel = require('../../../structure/sql-model');
const Repository = require('../../../pattern/repository');

describe('repository generateQueryFromParams', function() {
  
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

  it('should success with empty object when no params passed', async function() {

    const query = userRepo.generateQueryFromParams();
    expect(query).to.be.an('object');

  });
  it('should success with limit query when limit passed', async function() {

    const query = userRepo.generateQueryFromParams({
      limit: '5'
    });
    expect(query).to.be.an('object');
    expect(query.limit).to.be.equal(5);

  });
  it('should success with limit query when offset passed', async function() {

    const query = userRepo.generateQueryFromParams({
      offset: '0'
    });
    expect(query).to.be.an('object');
    expect(query.offset).to.be.equal(0);

  });
  it('should success with sort_by and sort_type passed', async function() {

    const query = userRepo.generateQueryFromParams({
      sort_by: 'newest',
      sort_type: 'asc'
    });
    expect(query).to.be.an('object');
    expect(query.order).to.be.an('array');
    expect(query.order[0][0]).to.be.equal('updated_at');
    expect(query.order[0][1]).to.be.equal('asc');
  });
  it('should success with q and qColumns passed', async function() {

    const query = userRepo.generateQueryFromParams({
      q: 'raka',
      qColumns: [
        'username'
      ]
    });
    expect(query).to.be.an('object');
  });

});