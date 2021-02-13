
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const ViewModel = require('../../../structure/view-model');

describe('view-model toObject method', function() {
  
  let classModel = null;
  let instance = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    class User extends ViewModel 
    {
      constructor(params)
      {
        super();
        this.setParams(params);
      }
    }
    
    classModel = User;    
  });

  afterEach(async function() {
    
  });

  it('should return children class properties when available', async function() {
    instance = new classModel({
      name: 'KokoRaka',
      username: 'kokoraka'
    });

    const object = instance.toObject();

    expect(object.name).to.be.equal('KokoRaka');
    expect(object.hasOwnProperty('username')).to.be.equal(true);

  });
  it('should return empty pbject when children has no member properties', async function() {
    instance = new classModel();

    const object = instance.toObject();

    expect(object).to.be.an('object');
    expect(object.hasOwnProperty('username')).to.be.equal(false);

  });

});