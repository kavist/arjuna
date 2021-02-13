
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));
// chai.use(require('chai-as-promised'));

// const { dsRedis } = require('../../../.utility/config');
// const RedisClientFactory = require('../../../.utility/factory/redis/RedisClientFactory');
// const Cache = require('../../../cache/cache');

// describe('cache del method', function() {
  
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

//       cache.del()

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when client is not valid', async function() {
//     await expect(

//       cache.del({
//         client: 'invalid_client'
//       })

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when key is not valid', async function() {
//     await expect(

//       cache.del({
//         key: {}
//       })

//     ).to.be.rejectedWith(Error);
//   });

//   it('should success with deleted key status', async function() {
//     await cache.set({ 
//       client: cacheClient,
//       key: 'key_name',
//       value: JSON.stringify({
//         fake: 'data'
//       })
//     });
    
//     await cache.del({ 
//       client: cacheClient,
//       key: 'key_name',
//     });

//     const result = await cache.get({ 
//       client: cacheClient,
//       key: 'key_name',
//     });

//     const object = JSON.parse(result);

//     expect(result).to.be.an('null');
//     expect(object).to.be.equal(null);
//   });

// });