
const chai = require('chai'), expect = chai.expect;
chai.use(require('chai-like'));
chai.use(require('chai-things'));

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

  
  it('should success when endpoint passed', async function() {
    Log.report('should success when endpoint passed',{
      messengers: [
        'online'
      ],
    });
  });
  it('should success when both messenger passed', async function() {
    Log.report('should success when both messenger passed',{
      messengers: [
        'local', 'online'
      ],
      logDirectory: '.utility/storage',
    });
  });


});