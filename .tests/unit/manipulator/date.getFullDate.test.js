
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const moment = require('moment');
const Date = require('../../../manipulator/date');

describe('getFullDate method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success with valid current date', async function() {
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const fulldate = Date.getFullDate();

    expect(currentDate).to.equal(fulldate);
  });
  it('should success with valid another date', async function() {
    const nextDay = moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss');
    const fulldate = Date.getFullDate(moment().add(1, 'days'));

    expect(nextDay).to.equal(fulldate);
  });

});