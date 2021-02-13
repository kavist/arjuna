
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));

// const { logSlack } = require('../../../.utility/config');

// const LogMessage = require('../../../log/log-message');
// const Log = require('../../../log/log');

// describe('log onlineReport method', function() {
  
//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
    
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when no messengers params passed', async function() {
//     expect(function() { 
//       Log.onlineReport();
//     }).to.throw('Invalid params');
//   });
//   it('should fail when no messengers data passed', async function() {
//     expect(function() { 
//       Log.onlineReport({
//         data: null
//       });
//     }).to.throw('Invalid params');
//   });
//   it('should fail when no messengers data passed', async function() {
//     expect(function() { 
//       Log.onlineReport({
//         data: 'should fail when no messengers logDirectory passed',
//       });
//     }).to.throw('Invalid params');
//   });
//   it('should fail when no valid endpoint passed', async function() {
//     expect(function() { 
//       Log.onlineReport({
//         data: 'should fail when no messengers logDirectory passed',
//         endpoint: null
//       });
//     }).to.throw('Invalid params');
//   });

//   it('should success when custom LogMessage passed', async function() {
//     const message = new LogMessage({
//       body: 'should success when custom LogMessage passed'
//     });
//     Log.onlineReport({
//       data: message,
//       endpoint: logSlack.webhook_url
//     });
//   }); 

// });