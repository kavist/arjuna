
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore flushCurrentDb method', function() {
  
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

      datastore.flushCurrentDb()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.flushCurrentDb({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  

  it('should success with reseted counter within key', async function() {

    await datastore.flushCurrentDb({ 
      client: datastoreClient,
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'flushCurrentDb_key',
    });

    expect(result).to.be.an('null').to.be.equal(null);
  });

});