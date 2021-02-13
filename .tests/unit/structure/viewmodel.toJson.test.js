
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const ViewModel = require('../../../structure/view-model');

describe('view-model toJson method', function() {
  
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

    const jsonString = instance.toJson();

    expect(jsonString).to.be.an('string');

  });
  it('should return empty string json when children has no member properties', async function() {
    instance = new classModel();

    const jsonString = instance.toJson();

    expect(jsonString).to.be.an('string');
    expect(jsonString).to.be.equal('{}');

  });

});