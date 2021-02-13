
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { sql: connection } = require('../../../utility/database');
const SqlModel = require('../../../model/sql-model');

describe('sql-model registerStaticFunctions methods', function() {
  
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
      SqlModel.registerStaticFunctions() 
    }).to.throw('Invalid params');

  });
  it('should fail when functionName is not a string', async function() {

    expect(function() { 
      SqlModel.registerStaticFunctions({
        functionName: {}
      });
    }).to.throw('Invalid params');

  });
  it('should fail when functionCallback is not a function', async function() {

    expect(function() { 
      SqlModel.registerStaticFunctions({
        functionCallback: {}
      });
    }).to.throw('Invalid params');

  });
  it('should success with custom function available', async function() {

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

        User.registerStaticFunctions({
          model: this.instance(),
          functionName: 'getLowercaseUsername',
          functionCallback: function() {
            const username = this.get('username');
            if (!username) {
              return '';
            }
            return username.toLowerCase();
          }
        }); 
      }

    }

    const userModel = new User();
    const user = await userModel.instance().findOne();

    expect(user.getLowercaseUsername).to.be.an('function');
    expect(user.getLowercaseUsername()).to.be.an('string')
      .to.equal(user.username.toLowerCase());

  });

});