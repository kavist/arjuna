
'use strict';

const sequelize = require('sequelize');
const { omit: _omit, merge: _merge } = require('lodash');

class SqlModel
{

  static ORM = sequelize;

  constructor(params)
  {
    if (this.constructor === SqlModel) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (!params || !params.connection || !params.tableName || !params.schema) {
      throw new Error("Invalid params");
    }
    this.orm = sequelize;
    this.connection = params.connection;
    this.tableName = params.tableName;
    this.schema = params.schema;

    this.option = SqlModel.getOption({
      tableName: this.tableName,
      option: params.option
    });
    
    this.model = this.connection.define(
      this.tableName, 
      this.schema, 
      this.option
    );

    this.protecteds = params.protecteds || [];

    SqlModel.registerDefaultStaticFunctions({
      model: this.model,
      protecteds: this.protecteds
    });
  }
  
  instance()
  {
    return this.model;
  }

  static registerDefaultStaticFunctions(params)
  {
    if (!params || !params.model) {
      throw new Error('Invalid params');
    }
    if (params.protecteds && !Array.isArray(params.protecteds)) {
      throw new Error('Invalid params');
    }

    /**
     * hide protected field from being exposed
     */
    SqlModel.registerStaticFunctions({
      model: params.model,
      functionName: 'toPublicJSON',
      functionCallback: function() {
        let values = Object.assign({}, this.get());
        return _omit(values, params.protecteds);
      }
    });
  }

  static registerStaticFunctions(params)
  {
    if (!params || !params.model || !params.functionName || !params.functionCallback) {
      throw new Error('Invalid params');
    }
    if (typeof params.functionName !== "string") {
      throw new Error('Invalid params');
    }
    if (typeof params.functionCallback !== "function") {
      throw new Error('Invalid params');
    }
    params.model.prototype[params.functionName] = params.functionCallback;
  }

  static getOption(params)
  {
    if (!params || !params.tableName) {
      throw new Error('Invalid params');
    }
    return _merge(params.option, {
      tableName: params.tableName,
      freezeTableName: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  }

}

module.exports = SqlModel;
