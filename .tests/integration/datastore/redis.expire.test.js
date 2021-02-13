
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');
const Date = require('../../../manipulator/date');

describe('datastore expire method', function() {
  
  let datastore = null;
  let datastoreClient = null;
  let connection = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    datastore = Datastore;
    connection = dsRedis.connection;
    datastoreClient = RedisClientFactory.create({
      connection: connection
    });
  });

  afterEach(async function() {
    
  });

  it('should fail when params is not passed', async function() {
    await expect(

      datastore.expire()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.expire({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.expire({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when time is not valid', async function() {
    await expect(

      datastore.expire({
        time: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with expired key status', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'expiring_key',
      value: JSON.stringify({
        fake: 'data'
      })
    });
    
    await datastore.expire({ 
      client: datastoreClient,
      key: 'expiring_key',
      time: 1
    });

    await Date.wait(2000);

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'expiring_key',
    });

    const object = JSON.parse(result);

    expect(result).to.be.an('null');
    expect(object).to.be.equal(null);
  });

});