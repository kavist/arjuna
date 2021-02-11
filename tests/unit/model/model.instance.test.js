
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const { main: connection } = require('../../../utility/database');
const Model = require('../../../models/model');

describe('model instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to create new instance from abstract class', async function() {

    expect(function() { new Model() }).to.throw('Cannot construct abstract instances directly');
  });
  it('should fail when create new instance without parameters', async function() {

    expect(function() { 
      class User extends Model {
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
      class User extends Model {
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

    class User extends Model {
      constructor()
      {
        super({
          connection: connection,
          tableName: 'user',
          schema: {
            id: {
              type: Model.ORM.BIGINT.UNSIGNED,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
            },
            username: {
              type: Model.ORM.STRING,
            },
          },
        });
      }
    }
    
    const user = new User();
    const equalInstance = user instanceof Model;

    expect(equalInstance).to.equal(true);

  });

});