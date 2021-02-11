
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Protobuf = require('../../../serialization/protobuf');

describe('protobuf decode method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {
    await expect(Protobuf.decode(null)).to.be.rejectedWith(Error);
  });
  it('should fail when data is invalid', async function() {
    await expect(
      Protobuf.decode({
        data: {
          id: 1
        },
        name: 'assets/protobuf/user.proto',
        package: 'user.User',
      })
    ).to.be.rejectedWith(Error);
  });
  it('should success with decoded data', async function() {
    const userData = {
      id: 1,
      name: 'KokoRaka',
      username: 'kokoaka',
      email: 'raka@idaman.id',
      gender: 'M'
    };
    const encodedData = await Protobuf.encode({
      data: userData,
      name: 'assets/protobuf/user.proto',
      package: 'user.User',
    });

    const decodedData = await Protobuf.decode({
      data: encodedData,
      name: 'assets/protobuf/user.proto',
      package: 'user.User',
    });

    expect(decodedData.id).to.be.equal(userData.id);
    expect(decodedData.name).to.be.equal(userData.name);
    expect(decodedData.username).to.be.equal(userData.username);
    expect(decodedData.email).to.be.equal(userData.email);
    expect(decodedData.gender).to.be.equal(userData.gender);
  });

});