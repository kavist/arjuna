
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const Object = require('../../../manipulator/object');

describe('object renameKey method', function() {
  
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
      Object.renameKey(null);
    }).to.throw('Invalid params');
  });

  it('should fail when params.keys is present and its not a valid array', async function() {
    expect(function() { 
      Object.renameKey({
        data: {},
        keys: []
      });
    }).to.throw('Keys should be valid array containing at least on element');
  });

  it('should fail when params.data is not an object', async function() {

    expect(function() { 
      Object.renameKey({
        data: ["1"],
        keys: [
          {
            oldKey: "_id",
            newKey: "id"
          }
        ]
      });
    }).to.throw('Data should be an object');
  });


  it('should fail when params.keys is containing invalid element', async function() {
    expect(function() { 
      Object.renameKey({
        data: {
          _id: "random_string",
          name: "KokoRaka"
        },
        keys: [
          {
            invalidKey: "1"
          }
        ]
      });
    }).to.throw('Keys contain invalid property');
  });

  it('should success when params.data and params.keys are specified', async function() {
    const renameObject = Object.renameKey({
      data: {
        _id: "random_string",
        name: "KokoRaka"
      },
      keys: [
        {
          oldKey: "_id",
          newKey: "id"
        }
      ]
    });

    expect(typeof renameObject === "object").to.equal(true);
    expect(renameObject.hasOwnProperty("id")).to.equal(true);    
    expect(renameObject.hasOwnProperty("_id")).to.equal(false);
    expect(renameObject.hasOwnProperty("name")).to.equal(true);
  });

  it('should success when params.keys.*.oldKey is not available in params.data', async function() {
    const renameObject = Object.renameKey({
      data: {
        _id: "random_string",
        name: "KokoRaka"
      },
      keys: [
        {
          oldKey: "missing_property",
          newKey: "new_property"
        }
      ]
    });

    expect(typeof renameObject === "object").to.equal(true);
    expect(renameObject.hasOwnProperty("id")).to.equal(false);
    expect(renameObject.hasOwnProperty("name")).to.equal(true);
    expect(renameObject.hasOwnProperty("missing_property")).to.equal(false);
  });

});