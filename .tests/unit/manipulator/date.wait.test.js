
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const moment = require('moment');
const Date = require('../../../manipulator/date');

describe('wait method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when duration is null', async function() {

    expect(function() { 
      Date.wait(null);
    }).to.throw('Invalid duration');
  });
  it('should fail when duration is string', async function() {

    expect(function() { 
      Date.wait('20');
    }).to.throw('Invalid duration');
  });
  it('should fail when duration is negative', async function() {

    expect(function() { 
      Date.wait(-1);
    }).to.throw('Invalid duration');
  });

  it('should success with valid blocking date', async function() {
    const startDate = moment().format('YYYY-MM-DD HH:mm:ss');
    await Date.wait(3000);
    const finishDate = moment().format('YYYY-MM-DD HH:mm:ss');

    const added3Seconds = moment(startDate).add(3, 'seconds').format('YYYY-MM-DD HH:mm:ss');
    expect(added3Seconds).to.be.equal(finishDate);
  });

});