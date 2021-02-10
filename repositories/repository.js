
const { Op } = require("sequelize");

class Repository
{

  constructor(params)
  {
    if (this.constructor === Repository) {
      throw new Error("Cannot construct abstract instances directly");
    }
    if (!params || !params.model) {
      throw new Error("Invalid params");
    }

    this.orm = params.model.orm;
    if (params.orm) {
      this.orm = params.orm;
    }
    this.modelInstance = params.model.instance();
  }

  async all()
  {
    return await this.modelInstance.findAll();
  }

  async get(params)
  {
    if (!params) {
      throw new Error("Invalid params");
    }
    return await this.modelInstance.findAll({
      attributes: params.attributes,
      where: params.filter,
      order: params.order,
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  async create(params)
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.create(
      params.data, 
      params.option || null
    );
  }

  async first(params)
  {
    if (!params || !params.filter) {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.findOne({
      attributes: params.attributes,
      where: params.filter,
      paranoid: params.paranoid,
      order: params.order,
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  async update(params)
  {
    if (!params || !params.data || !params.filter) {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.update(params.data, {
      where: params.filter,
      paranoid: params.paranoid,
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  async delete(params)
  {
    if (!params || !params.filter) {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.destroy({
      where: params.filter,
      force: params.force,
    });
  }

  async insert(params)
  {
    if (!params || !params.data) {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.bulkCreate(
      params.data, 
      params.option || null
    );
  }

  async findByIdentifier(params)
  {
    if (!params || !params.identifier || 
      !params.columns || !Array.isArray(params.columns) &&
      params.columns.length > 0) {
      throw new Error('Invalid params');
    }
    const filter = params.columns.map(column => {
      return {
        [column]: params.identifier
      }
    });
    return await this.modelInstance.findOne({
      where: {
        [Op.or]: filter
      },
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  static generateQueryFromParams(params)
  {
    let query = {};
    if (params) {

      if (params.limit) {
        query.limit = parseInt(params.limit);
      }
      if (params.offset) {
        query.offset = parseInt(params.offset);
      }

      if (params.sort_by && params.sort_type) {
        if (params.sort_by === "newest") {
          query.order = [
            ['updated_at', params.sort_type]
          ];
        }
      }

      if (params.q && params.qColumns) {
        const likeQuery = {
          [Op.like]: `%${params.q}%`
        };
        let orQueries = {};
        params.qColumns.forEach(qColumn => {
          orQueries[qColumn] = likeQuery;
        });
        query.where = {
          [Op.or]: orQueries
        };
      }

    }

    return query;
  }

  static getTransactionFromParams(params)
  {
    return params.option && params.option.transaction ? 
      params.option.transaction : 
      (params.transaction ? params.transaction : null);
  }

  static registerStaticFunctions(classInstance)
  {
    Repository.getMethodNames(classInstance).forEach(methodName => {
      Repository.registerStaticFunction(classInstance, methodName);
    });
  }

  static registerStaticFunction(classInstance, methodName)
  {
    classInstance[methodName] = function(params) {
      return (new classInstance())[methodName](params);
    };
  }

  static getMethodNames(classInstance)
  {
    return [
      ...Object.getOwnPropertyNames(classInstance.prototype),
      ...Object.getOwnPropertyNames(Repository.prototype),
    ].filter(methodName => {
      return methodName !== "constructor" && 
        methodName !== "length" && 
        methodName !== "prototype" && 
        methodName !== "name";
    });
  }

}

module.exports = Repository