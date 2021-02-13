
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Cache = require('../../../cache/cache');

describe('cache resetCounter method', function() {
  
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

      cache.resetCounter()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      cache.resetCounter({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      cache.resetCounter({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with reseted counter within key', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'resetCounter_key',
      value: 1
    });
    
    await cache.resetCounter({ 
      client: cacheClient,
      key: 'resetCounter_key',
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'resetCounter_key',
    });

    expect(result).to.be.an('string').to.be.equal('0');
  });

});