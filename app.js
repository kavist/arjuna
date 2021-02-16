
const path = require('path');

require('dotenv').config({ 
  path: path.join(__dirname, '.env') 
});

const Datastore = require('./datastore/datastore');
const DatastoreClient = require('./datastore/datastore-client');
const Redis = require('./datastore/redis');
const Config = require('./datastore/config');

const Log = require('./log/log');

const Date = require('./manipulator/date');
const Html = require('./manipulator/html');
const Number = require('./manipulator/number');
const Text = require('./manipulator/text');

const Event = require('./network/event');
const EventClient = require('./network/event-client');
const EventClientRabbit = require('./network/event-client-rabbit');
const Request = require('./network/request');
const Response = require('./network/response');

const Command = require('./pattern/command');
const Factory = require('./pattern/factory');
const Operation = require('./pattern/operation');
const Provider = require('./pattern/provider');
const Repository = require('./pattern/repository');

const Protobuf = require('./serialization/protobuf');

const Entity = require('./structure/entity');
const SqlModel = require('./structure/sql-model');
const ViewModel = require('./structure/view-model');

module.exports = {
  Datastore: Datastore,
  DatastoreClient: DatastoreClient,
  Redis: Redis,
  Config: Config,

  Log: Log,

  Date: Date,
  Html: Html,
  Number: Number,
  Text: Text,

  Event: Event,
  EventClient: EventClient,
  EventClientRabbit: EventClientRabbit,
  Request: Request,
  Response: Response,

  Command: Command,
  Factory: Factory,
  Operation: Operation,
  Provider: Provider,
  Repository: Repository,

  Protobuf: Protobuf,

  Entity: Entity,
  SqlModel: SqlModel,
  ViewModel: ViewModel
}
