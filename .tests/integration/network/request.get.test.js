
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));
// chai.use(require('chai-as-promised'));

// const Request = require('../../../network/request');

// describe('request get method', function() {
  
//   let request = null;

//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
//     request = new Request();
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when params.url is not a string', async function() {
//     await expect(

//       request.get({ url: 0 })

//     ).to.be.rejectedWith(Error);
//   });
//   it('should success when params.url is a string', async function() {

//     const response = await request.get({ 
//       url: 'https://google.com' 
//     });

//     expect(response).to.be.an('object');

//   });
  
// });