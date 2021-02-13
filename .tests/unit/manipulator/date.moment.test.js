
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const moment = require('moment');
const Date = require('../../../manipulator/date');

describe('moment method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success with valid momentjs date data', async function() {
    const currentDate = new Date();
    const momentInstance = moment(currentDate)
    const validMomentInstance = Date.moment(currentDate);

    expect(momentInstance.format('YYYY-MM-DD HH:mm:ss'))
      .to.equal(validMomentInstance.format('YYYY-MM-DD HH:mm:ss'));
  });
  it('should success with valid momentjs with default parameters', async function() {
    Date.moment();
  });

});