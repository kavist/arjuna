
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

const LogMessage = require('../../../log/log-message');
const Log = require('../../../log/log');

describe('log report method', function() {
  
  before(function() {
    
  });

  after(function() {
    
  });

  beforeEach(function() {
    
  });

  afterEach(async function() {
    
  });

  it('should success when string message passed', async function() {
    Log.report('message to be reported');
  });
  it('should fail when no messengers logDirectory passed', async function() {
    expect(function() { 
      Log.report('message to be reported', {
        messengers: [
          'local'
        ]
      });
    }).to.throw('Invalid params');
  });
  it('should fail when no messengers endpoint passed', async function() {
    expect(function() { 
      Log.report('should fail when no messengers endpoint passed', {
        messengers: [
          'online'
        ]
      });
    }).to.throw('Invalid params');
  });
  it('should success when logDirectory passed', async function() {
    Log.report('should success when logDirectory passed',{
      messengers: [
        'local'
      ],
      logDirectory: 'utility/storage'
    });
  });

  it('should success when custom LogMessage passed', async function() {
    const message = new LogMessage({
      body: 'should success when custom LogMessage passed'
    });
    Log.report(message, {
      messengers: [
        'local'
      ],
      logDirectory: 'utility/storage',
    });
  }); 

});