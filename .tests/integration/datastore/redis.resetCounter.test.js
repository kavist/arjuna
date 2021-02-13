
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore resetCounter method', function() {
  
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

      datastore.resetCounter()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.resetCounter({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.resetCounter({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with reseted counter within key', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'resetCounter_key',
      value: 1
    });
    
    await datastore.resetCounter({ 
      client: datastoreClient,
      key: 'resetCounter_key',
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'resetCounter_key',
    });

    expect(result).to.be.an('string').to.be.equal('0');
  });

});