
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore set method', function() {
  
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

      datastore.set()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.set({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.set({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when value is not valid', async function() {
    await expect(

      datastore.set({
        value: undefined
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when value is null', async function() {
    await expect(

      datastore.set({
        client: datastoreClient,
        key: 'key_name',
        value: null
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success when value is passed', async function() {
    const result = await datastore.set({ 
      client: datastoreClient,
      key: 'key_name',
      value: JSON.stringify({
        fake: 'data'
      })
    });

    expect(result).to.be.an('string').to.be.equal('OK');
  });

});