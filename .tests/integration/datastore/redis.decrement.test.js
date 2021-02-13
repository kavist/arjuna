
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore decrement method', function() {
  
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

      datastore.decrement()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.decrement({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.decrement({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when amount is not valid', async function() {
    await expect(

      datastore.decrement({
        amount: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with decremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'decrement_key',
      value: 1
    });
    
    await datastore.decrement({ 
      client: datastoreClient,
      key: 'decrement_key',
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('0');
  });

  it('should success with custom decremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
      value: 5
    });
    
    await datastore.decrement({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
      amount: 3
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('2');
  });

  it('should success with negative decremented key value', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
      value: 5
    });
    
    await datastore.decrement({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
      amount: -5
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'custom_decrement_key',
    });

    expect(result).to.be.an('string').to.be.equal('10');
  });

});