
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const LogMessage = require('../../../log/log-message');
const Log = require('../../../log/log');

describe('log localReport method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should fail when no messengers params passed', async function() {
    expect(function() { 
      Log.localReport();
    }).to.throw('Invalid params');
  });
  it('should fail when no messengers data passed', async function() {
    expect(function() { 
      Log.localReport({
        data: null
      });
    }).to.throw('Invalid params');
  });
  it('should fail when no messengers logDirectory passed', async function() {
    expect(function() { 
      Log.localReport({
        data: 'should fail when no messengers logDirectory passed',
        logDirectory: null
      });
    }).to.throw('Invalid params');
  });
  it('should fail when no messengers data passed', async function() {
    expect(function() { 
      Log.localReport({
        data: 'should fail when no messengers logDirectory passed',
        logDirectory: '.utility/storage'
      });
    }).to.throw('Invalid params');
  });

  it('should success when custom LogMessage passed', async function() {
    const message = new LogMessage({
      body: 'should success when custom LogMessage passed'
    });
    Log.localReport({
      data: message,
      logDirectory: '.utility/storage'
    });
  }); 

});