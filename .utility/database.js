
const { Sequelize } = require("sequelize");
const mongoose = require('mongoose');

const { dbSql, dbDocument } = require('./config');

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
  sql: new Sequelize({
    dialect: dbSql.connection,
    host: dbSql.host,
    port: dbSql.port,
    database: dbSql.database,
    username: dbSql.username,
    password: dbSql.password,
    logging: logger,
    timezone: "+07:00",
  }),
  document: mongoose.createConnection(dbDocument.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    retryWrites: false
  }),
};

handleSequelize(connections.sql);
handleMongoose(connections.document);

module.exports = connections