
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const Entity = require('./entities/entity');
const Model = require('./models/model');
const Repository = require('./repositories/repository');
const Date = require('./date/date');
const Request = require('./http/request');
const Response = require('./http/response');
const Number = require('./number/number');
const Text = require('./text/text');
const Protobuf = require('./serialization/protobuf');

const App = {
  Entity: Entity,
  Model: Model,
  Repository: Repository,
  Date: Date,
  Request: Request,
  Response: Response,
  Number: Number,
  Text: Text,
  Protobuf: Protobuf
};

module.exports = {
  App: App,
  ...App
};
