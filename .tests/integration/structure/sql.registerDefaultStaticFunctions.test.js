
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));

// const { sql: connection } = require('../../../.utility/database');
// const SqlModel = require('../../../structure/sql-model');

// describe('sql-model registerDefaultStaticFunctions methods', function() {
  
//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
    
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when params is invalid', async function() {

//     expect(function() { 
//       SqlModel.registerDefaultStaticFunctions() 
//     }).to.throw('Invalid params');

//   });
//   it('should fail when model is invalid', async function() {

//     expect(function() { 
//       SqlModel.registerDefaultStaticFunctions({
//         model: null
//       });
//     }).to.throw('Invalid params');

//   });
//   it('should fail when protecteds is not an array', async function() {

//     expect(function() { 
//       SqlModel.registerStaticFunctions({
//         model: {},
//         protecteds: ''
//       });
//     }).to.throw('Invalid params');

//   });
//   it('should success with custom function available', async function() {

//     class User extends SqlModel {

//       constructor()
//       {
//         super({
//           connection: connection,
//           tableName: 'user',
//           protecteds: [
//             'password'
//           ],
//           schema: {
//             id: {
//               type: SqlModel.ORM.BIGINT.UNSIGNED,
//               autoIncrement: true,
//               allowNull: false,
//               primaryKey: true
//             },
//             username: {
//               type: SqlModel.ORM.STRING,
//             },
//           },
//         });
//       }

//     }

//     const userModel = new User();
//     const user = await userModel.instance().findOne();

//     expect(user.toPublicJSON).to.be.an('function');
//     expect(user.toPublicJSON()).to.be.an('object');

//   });

// });