
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Cache = require('../../../cache/cache');

describe('cache decrement method', function() {
  
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

      cache.decrement()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      cache.decrement({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      cache.decrement({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when amount is not valid', async function() {
    await expect(

      cache.decrement({
        amount: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with decremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'decrement_key',
      value: 1
    });
    
    await cache.decrement({ 
      client: cacheClient,
      key: 'decrement_key',
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('0');
  });

  it('should success with custom decremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'custom_decrement_key',
      value: 5
    });
    
    await cache.decrement({ 
      client: cacheClient,
      key: 'custom_decrement_key',
      amount: 3
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'custom_decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('2');
  });

  it('should success with negative decremented key value', async function() {
    await cache.set({ 
      client: cacheClient,
      key: 'custom_decrement_key',
      value: 5
    });
    
    await cache.decrement({ 
      client: cacheClient,
      key: 'custom_decrement_key',
      amount: -5
    });

    const result = await cache.get({ 
      client: cacheClient,
      key: 'custom_decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('10');
  });

});