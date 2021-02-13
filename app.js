
const path = require('path');

require('dotenv').config({ 
  path: path.join(__dirname, '.env') 
});

const Cache = require('./cache/cache');
const CacheClient = require('./cache/cache-client');
const CacheClientRedis = require('./cache/cache-client-redis');

const Log = require('./log/log');

const Config = require('./manipulator/config');
const Date = require('./manipulator/date');
const Html = require('./manipulator/html');
const Number = require('./manipulator/number');
const Text = require('./manipulator/text');

const Event = require('./network/event');
const EventClient = require('./network/event-client');
const EventClientRabbit = require('./network/event-client-rabbit');
const Request = require('./network/request');
const Response = require('./network/response');

const Command = require('./pattern/Command');
const Factory = require('./pattern/Factory');
const Operation = require('./pattern/Operation');
const Provider = require('./pattern/provider');
const Repository = require('./pattern/repository');

const Protobuf = require('./serialization/protobuf');

const Entity = require('./structure/entity');
const SqlModel = require('./structure/sql-model');
const ViewModel = require('./structure/view-model');

module.exports = {
  Cache: Cache,
  CacheClient: CacheClient,
  CacheClientRedis: CacheClientRedis,

  Log: Log,

  Config: Config,
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
