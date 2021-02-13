
// const chai = require('chai'), expect = chai.expect;
// chai.use(require('chai-like'));
// chai.use(require('chai-things'));
// chai.use(require('chai-as-promised'));

// const { sql: connection } = require('../../../.utility/database');
// const SqlModel = require('../../../structure/sql-model');
// const Repository = require('../../../pattern/repository');

// describe('repository delete method', function() {
  
//   let userRepo = null;

//   before(function() {
    
//   });

//   after(function() {
    
//   });

//   beforeEach(function() {
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

//     class UserRepo extends Repository { 

//       constructor()
//       {
//         super({
//           model: new User()
//         });
//       }

//     }

//     userRepo = new UserRepo();
//   });

//   afterEach(async function() {
    
//   });

//   it('should fail when no params passed', async function() {
//     await expect(userRepo.delete()).to.be.rejectedWith(Error);
//   });
//   it('should fail when filter is not an object', async function() {
//     await expect(
//       userRepo.delete({
//         filter: ''
//       })
//     ).to.be.rejectedWith(Error);
//   });
//   it('should fail when force is not a boolean', async function() {
//     await expect(
//       userRepo.delete({
//         filter: {
//           username: 'username'
//         },
//         force: ''
//       })
//     ).to.be.rejectedWith(Error);
//   });
//   it('should success when filter params is an object', async function() {
//     const user = await userRepo.delete({
//       filter: {
//         username: 'username'
//       },
//     });

//     expect(userRepo.delete).to.be.an('function');
//     expect(user).to.be.an('number');
//   });

// });