
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Cache = require('../../../cache/cache');
const Date = require('../../../manipulator/date');

describe('cache expire method', function() {
  
  let cache = null;
  let cacheClient = null;
  let connection = null;

  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    cache = Cache;
    connection = dsRedis.connection;
    cacheClient = RedisClientFactory.create({
      connection: connection
    });
  });

  afterEach(async function() {
    
  });

  it('should fail when params is not passed', async function() {
    await expect(

      cache.expire()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      cache.expire({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      cache.expire({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when time is not valid', async function() {
    await expect(

      cache.expire({
        time: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with expired key status', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'expiring_key',
      value: JSON.stringify({
        fake: 'data'
      })
    });
    
    await cache.expire({ 
      client: cacheClient,
      key: 'expiring_key',
      time: 1
    });

    await Date.wait(2000);

    const result = await cache.get({ 
      client: cacheClient,
      key: 'expiring_key',
    });

    const object = JSON.parse(result);

    expect(result).to.be.an('null');
    expect(object).to.be.equal(null);
  });

});