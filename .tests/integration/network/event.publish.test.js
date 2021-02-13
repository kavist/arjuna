
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));
// chai.use(require('chai-as-promised'));

// const { publisher } = require('../../../.utility/messaging');
// const EventClientRabbit = require('../../../network/event-client-rabbit');
// const Event = require('../../../network/event');

// describe('event publish method', function() {
  
//   let event = null;
//   let eventClient = null;
//   let connection = null;

//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
//     event = Event;
//     connection = publisher;
//     eventClient = new EventClientRabbit({
//       connection: connection
//     });
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when params is not passed', async function() {
//     await expect(

//       event.publish()

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when params.client is not valid', async function() {
//     await expect(

//       event.publish({
//         client: 'invalid_client'
//       })

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when params.exchange_name is not valid', async function() {
//     await expect(

//       event.publish({
//         exchange_name: {}
//       })

//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when params.data is not valid', async function() {
//     await expect(

//       event.publish({
//         data: ''
//       })

//     ).to.be.rejectedWith(Error);
//   });

//   it('should success when no data is passed', async function() {
//     const result = await event.publish({ 
//       client: eventClient,
//       exchange_name: 'test_sent',
//     });

//     expect(result).to.be.an('undefined');
//   });
  
//   it('should success when data is passed', async function() {
//     const result = await event.publish({ 
//       client: eventClient,
//       exchange_name: 'test_buffer_data',
//       data: {
//         fake: 'data'
//       }
//     });

//     expect(result).to.be.an('undefined');
//   });

//   it('should success when using proto buffer data', async function() {
//     const result = await event.publish({ 
//       client: eventClient,
//       exchange_name: 'test_proto_data',
//       data: {
//         id: 1,
//         name: 'KokoRaka',
//         username: 'kokoaka',
//         email: 'raka@idaman.id',
//         gender: 'M'
//       },
//       proto: {
//         name: 'assets/protobuf/user.proto',
//         package: 'user.User',
//       }
//     });

//     expect(result).to.be.an('undefined');
//   });

// });