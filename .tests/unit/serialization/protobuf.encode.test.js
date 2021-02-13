
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Protobuf = require('../../../serialization/protobuf');

describe('protobuf encode method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {
    await expect(Protobuf.encode(null)).to.be.rejectedWith(Error);
  });
  it('should fail when data is invalid', async function() {
    await expect(
      Protobuf.encode({
        data: {
          id: 1
        },
        name: 'assets/protobuf/user.proto',
        package: 'user.User',
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success with encoded data', async function() {

    const encodedData = await Protobuf.encode({
      data: {
        id: 1,
        name: 'KokoRaka',
        username: 'kokoaka',
        email: 'raka@idaman.id',
        gender: 'M'
      },
      name: 'assets/protobuf/user.proto',
      package: 'user.User',
    });

    const isValid = encodedData instanceof Buffer;
    expect(isValid).to.be.equal(true);
  });

});