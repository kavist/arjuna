
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Entity = require('../../../entity/entity');
class User extends Entity { }

describe('entity setParams method', function() {
  
  let instance;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    instance = new User();
  });

  afterEach(async function() {
    
  });

  it('should success with property setted in instance', async function() {
    const userData = {
      id: 1,
      name: 'KokoRaka'
    };

    instance.setParams(userData);

    expect(instance.id).to.equal(userData.id);
    expect(instance.name).to.equal(userData.name);
  });
  it('should returning instance when chaining', async function() {
    const userData = {
      id: 1,
      name: 'KokoRaka'
    };

    const returning = instance.setParams(userData);
    const equal = returning instanceof Entity;
    expect(equal).to.equal(true);
  });
  it('should success with property ignored in instance', async function() {
    const userData = {
      id: 1,
      name: 'KokoRaka',
      password: 'some_secret'
    };

    instance.setParams(userData, [
      'id', 'name',
    ]);

    expect(instance.password).to.equal(undefined);
  });

});