
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore del method', function() {
  
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

      datastore.del()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.del({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.del({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success with deleted key status', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'key_name',
      value: JSON.stringify({
        fake: 'data'
      })
    });
    
    await datastore.del({ 
      client: datastoreClient,
      key: 'key_name',
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'key_name',
    });

    const object = JSON.parse(result);

    expect(result).to.be.an('null');
    expect(object).to.be.equal(null);
  });

});