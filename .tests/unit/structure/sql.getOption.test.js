
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const SqlModel = require('../../../structure/sql-model');

describe('sql-model getOption methods', function() {
  
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
      SqlModel.getOption() 
    }).to.throw('Invalid params');

  });
  it('should fail when tableName is invalid', async function() {

    expect(function() { 
      SqlModel.getOption({
        tableName: null
      }) 
    }).to.throw('Invalid params');
  });
  it('should success with valid property', async function() {

    const option = SqlModel.getOption({
      tableName: 'user'
    });

    expect(option.tableName).to.equal('user');
    expect(option.freezeTableName).to.equal(true);
    expect(option.timestamps).to.equal(true);
    expect(option.createdAt).to.equal('created_at');
    expect(option.updatedAt).to.equal('updated_at');

  });
  it('should success with overrided valid property', async function() {

    const option = SqlModel.getOption({
      tableName: 'user',
      option: {
        freezeTableName: false,
        timestamps: false,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        paranoid: true,
      }
    });

    expect(option.tableName).to.equal('user');
    expect(option.freezeTableName).to.equal(false);
    expect(option.timestamps).to.equal(false);
    expect(option.createdAt).to.equal('createdAt');
    expect(option.updatedAt).to.equal('updatedAt');
    expect(option.paranoid).to.equal(true);

  });

});