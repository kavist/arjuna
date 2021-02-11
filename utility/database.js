
const { Sequelize } = require("sequelize");
const mongoose = require('mongoose');

const { db } = require('./config');

const logger = (message) => {
  console.log("[QUERY_LOG] \n" + message);
  return false;
};

const handleSequelize = (connection) => {
  connection.authenticate()
    .then(() => {
      console.info('Sequelize connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:' + err);
    });
};

const handleMongoose = (connection) => {
  connection.once('open', () => {
    console.info('Mongoose connection has been established successfully.');
  });
  connection.on('error', () => {
    console.error('Unable to connect to the document database');
  });
};

const connections = {
  main: new Sequelize({
    dialect: db.main.connection,
    host: db.main.host,
    port: db.main.port,
    database: db.main.database,
    username: db.main.username,
    password: db.main.password,
    logging: logger,
    timezone: "+07:00",
  }),
  document: mongoose.createConnection(db.document.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    retryWrites: false
  }), 
  memory: {
    auth: {
      tokens: [ /** value: {access_token: '', refresh_token: ''} */],
    }
  }
};

handleSequelize(connections.main);
handleMongoose(connections.document);

module.exports = connections