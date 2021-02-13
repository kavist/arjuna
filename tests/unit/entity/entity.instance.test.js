
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Entity = require('../../../entity/entity');

describe('entity instance', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when trying to create new instance from abstract class', async function() {

    expect(function() { new Entity() }).to.throw('Cannot construct abstract instances directly');
  });
  it('should success when creating instance from child class', async function() {

    class User extends Entity { }
    
    const user = new User();
    const equalInstance = user instanceof Entity;

    expect(equalInstance).to.equal(true);

  });

});