
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

const { dsRedis } = require('../../../.utility/config');
const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
const Datastore = require('../../../datastore/datastore');

describe('datastore get method', function() {
  
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

      datastore.get()

    ).to.be.rejectedWith(Error);
  });
  it('should fail when client is not valid', async function() {
    await expect(

      datastore.get({
        client: 'invalid_client'
      })

    ).to.be.rejectedWith(Error);
  });
  it('should fail when key is not valid', async function() {
    await expect(

      datastore.get({
        key: {}
      })

    ).to.be.rejectedWith(Error);
  });

  it('should success when key value available', async function() {
    await datastore.set({ 
      client: datastoreClient,
      key: 'key_name',
      value: JSON.stringify({
        fake: 'data'
      })
    });

    const result = await datastore.get({ 
      client: datastoreClient,
      key: 'key_name',
    });

    const object = JSON.parse(result);

    expect(result).to.be.an('string');
    expect(object).to.be.an('object');
    expect(object.fake).to.be.an('string')
      .to.be.equal('data');
  });

});