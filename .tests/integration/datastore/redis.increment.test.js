
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore increment method', function() {
  
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

      datastore.increment()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.increment({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.increment({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when amount is not valid', async function() {
    await expect(

      datastore.increment({
        amount: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with incremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'increment_key',
      value: 1
    });
    
    await datastore.increment({ 
      client: datastoreClient,
      key: 'increment_key',
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('2');
  });

  it('should success with custom incremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'custom_increment_key',
      value: 1
    });
    
    await datastore.increment({ 
      client: datastoreClient,
      key: 'custom_increment_key',
      amount: 5
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'custom_increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('6');
  });

  it('should success with negative incremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'custom_increment_key',
      value: 1
    });
    
    await datastore.increment({ 
      client: datastoreClient,
      key: 'custom_increment_key',
      amount: -5
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'custom_increment_key',
    });

    expect(result).to.be.an('string').to.be.equal('-4');
  });

});