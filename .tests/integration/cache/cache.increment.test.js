
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Cache = require('../../../cache/cache');

describe('cache increment method', function() {
  
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

      cache.increment()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      cache.increment({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      cache.increment({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when amount is not valid', async function() {
    await expect(

      cache.increment({
        amount: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with incremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'increment_key',
      value: 1
    });
    
    await cache.increment({ 
      client: cacheClient,
      key: 'increment_key',
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('2');
  });

  it('should success with custom incremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'custom_increment_key',
      value: 1
    });
    
    await cache.increment({ 
      client: cacheClient,
      key: 'custom_increment_key',
      amount: 5
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'custom_increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('6');
  });

  it('should success with negative incremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'custom_increment_key',
      value: 1
    });
    
    await cache.increment({ 
      client: cacheClient,
      key: 'custom_increment_key',
      amount: -5
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'custom_increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('-4');
  });

});