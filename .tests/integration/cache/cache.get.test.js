
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));
// chai.use(require('chai-as-promised'));

// const { dsRedis } = require('../../../.utility/config');
// const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
// const Cache = require('../../../cache/cache');

// describe('cache get method', function() {
  
//   let cache = null;
//   let cacheClient = null;
//   let connection = null;

//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
//     cache = Cache;
//     connection = dsRedis.connection;
//     cacheClient = RedisClientFactory.create({
//       connection: connection
//     });
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when params is not passed', async function() {
//     await expect(

//       cache.get()

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when client is not valid', async function() {
//     await expect(

//       cache.get({
//         client: 'invalid_client'
//       })

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when key is not valid', async function() {
//     await expect(

//       cache.get({
//         key: {}
//       })

//     ).to.be.rejectedWith(Error);
//   });

//   it('should success when key value available', async function() {
//     await cache.set({ 
//       client: cacheClient,
//       key: 'key_name',
//       value: JSON.stringify({
//         fake: 'data'
//       })
//     });

//     const result = await cache.get({ 
//       client: cacheClient,
//       key: 'key_name',
//     });

//     const object = JSON.parse(result);

//     expect(result).to.be.an('string');
//     expect(object).to.be.an('object');
//     expect(object.fake).to.be.an('string')
//       .to.be.equal('data');
//   });

// });