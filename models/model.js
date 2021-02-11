
'use strict';

const sequelize = require('sequelize');
const { omit: _omit, merge: _merge } = require('lodash');

class Model
{

  static ORM = sequelize;

  constructor(params)
  {
    if (this.constructor === Model) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (!params || !params.connection || !params.tableName || !params.schema) {
      throw new Error("Invalid params");
    }
    this.tableName = params.tableName;
    this.schema = params.schema;
    this.option = params.option;

    if (params.protecteds && Array.isArray(params.protecteds)) {
      this.protecteds = params.protecteds;
    }

    const DEFAULT_OPTIONS = {
      tableName: this.tableName,
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    };
    if (params.option) {
      this.option = _merge(params.option, DEFAULT_OPTIONS);      
    }
    else {
      this.option = DEFAULT_OPTIONS;
    }

    this.orm = sequelize;
    this.connection = params.connection;
    this.model = this.connection.define(this.tableName, this.schema, this.option);

    const curr = this;
    this.model.prototype.toPublicJSON = function() {
      let values = Object.assign({}, this.get());
      return _omit(values, curr.protecteds);
    };
  }
  
  instance()
  {
    return this.model;
  }

}

module.exports = Model