
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const Protobuf = require('../../../serialization/protobuf');

describe('protobuf verify method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when params is invalid', async function() {
    await expect(Protobuf.verify(null)).to.be.rejectedWith(Error);
  });

  it('should success with verified data', async function() {

    const isValidData = await Protobuf.verify({
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

    expect(isValidData).to.equal(true);
  });

  it('should success with unverified data', async function() {
    const isValidData = await Protobuf.verify({
      data: {
        id: 1,
        code: '7483e9w074r8e9',
        status: 'WAITING_PAYMENT',
      },
      name: 'assets/protobuf/user.proto',
      package: 'user.User',
    });

    expect(isValidData).to.equal(false);
  });

});