
const { messagingMain } = require('./config');
const ConnectionFactory = require('./factory/rabbitmq/ConnectionFactory');

module.exports = {
  publisher: ConnectionFactory.create({
    connectionName: 'Publisher',
      connectionString: messagingMain.connection || 'amqp://localhost'
    }),
  subscriber: ConnectionFactory.create({
    connectionName: 'Subscriber',
      connectionString: messagingMain.connection || 'amqp://localhost'
    }),
};
