
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');

describe('sql-model createSqlModel methods', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {

    expect(function() { 
      SqlModel.createSqlModel() 
    }).to.throw('Invalid params');

  });
  it('should fail when connection is invalid', async function() {

    expect(function() { 
      SqlModel.createSqlModel({
        connection: null
      }) 
    }).to.throw('Invalid params');
  });
  it('should fail when tableName is invalid', async function() {

    expect(function() { 
      SqlModel.createSqlModel({
        tableName: null
      }) 
    }).to.throw('Invalid params');
  });
  it('should fail when schema is invalid', async function() {

    expect(function() { 
      SqlModel.createSqlModel({
        schema: null
      }) 
    }).to.throw('Invalid params');
  });
  it('should fail when option is invalid', async function() {

    expect(function() { 
      SqlModel.createSqlModel({
        option: null
      }) 
    }).to.throw('Invalid params');
  });
  it('should success with valid sqlModel', async function() {

    const sqlModel = SqlModel.createSqlModel({
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
      option: {
        tableName: 'user',
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    });

    expect(sqlModel).to.be.an('function');

  });
});