
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');

describe('sql-model instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to create new instance from abstract class', async function() {

    expect(function() { new SqlModel() }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when create new instance without parameters', async function() {

    expect(function() { 
      class User extends SqlModel {
        constructor()
        {
          super({
  
          });
        }
      }

      new User();
    }).to.throw('Invalid params');
  });
  it('should fail when create new instance with invalid parameters', async function() {

    expect(function() { 
      class User extends SqlModel {
        constructor()
        {
          super({
            connection: null,
            tableName: null,
            schema: null,
          });
        }
      }

      new User();
    }).to.throw('Invalid params');
  });
  it('should success when creating instance with valid paramters', async function() {

    class User extends SqlModel {
      constructor()
      {
        super({
          connection: connection,
          tableName: 'user',
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
    
    const user = new User();
    const equalInstance = user instanceof SqlModel;

    expect(equalInstance).to.equal(true);

  });
  it('should success when creating instance with valid protecteds property', async function() {

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
    
    const user = new User();

    expect(user.protecteds).to.be.an('array');
    expect(user.protecteds[0]).to.be.an('string')
      .to.be.equal('password');
  });

});