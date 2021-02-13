
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
    if (params.filter !== undefined && (typeof params.filter !== "object")) {
      throw new Error("Invalid params");
    }
    if (params.attributes !== undefined && !Array.isArray(params.attributes)) {
      throw new Error("Invalid params");
    }
    if (params.order !== undefined && !Array.isArray(params.order)) {
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
    if (params.data !== undefined && typeof params.data !== "object") {
      throw new Error('Invalid params');
    }
    if (params.option !== undefined && typeof params.option !== "object") {
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
    if (params.filter !== undefined && (typeof params.filter !== "object")) {
      throw new Error("Invalid params");
    }
    if (params.attributes !== undefined && !Array.isArray(params.attributes)) {
      throw new Error("Invalid params");
    }
    if (params.order !== undefined && !Array.isArray(params.order)) {
      throw new Error("Invalid params");
    }
    if (params.paranoid !== undefined && typeof params.paranoid !== "boolean") {
      throw new Error("Invalid params");
    }
    return await this.modelInstance.findOne({
      attributes: params.attributes,
      where: params.filter,
      order: params.order,
      paranoid: params.paranoid,
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  /**
   * return Array containing one element of 
   * total numbers of updated records
   */
  async update(params)
  {
    if (!params || !params.data || !params.filter) {
      throw new Error('Invalid params');
    }
    if (params.filter !== undefined && (typeof params.filter !== "object")) {
      throw new Error("Invalid params");
    }
    if (params.paranoid !== undefined && typeof params.paranoid !== "boolean") {
      throw new Error("Invalid params");
    }
    return await this.modelInstance.update(params.data, {
      where: params.filter,
      paranoid: params.paranoid,
      transaction: Repository.getTransactionFromParams(params)
    });
  }

  /**
   * return @int total numbers of deleted records
   */
  async delete(params)
  {
    if (!params || !params.filter) {
      throw new Error('Invalid params');
    }
    if (params.filter !== undefined && (typeof params.filter !== "object")) {
      throw new Error("Invalid params");
    }
    if (params.force !== undefined && typeof params.force !== "boolean") {
      throw new Error("Invalid params");
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
    if (params.data !== undefined && !Array.isArray(params.data)) {
      throw new Error('Invalid params');
    }
    if (params.option !== undefined && typeof params.option !== "object") {
      throw new Error('Invalid params');
    }
    return await this.modelInstance.bulkCreate(
      params.data, 
      params.option
    );
  }

  async findByIdentifier(params)
  {
    if (!params || !params.identifier) {
      throw new Error('Invalid params');
    }
    if (!params.columns || !Array.isArray(params.columns) || 
      params.columns.length < 1) {
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
    if (params) {
      if (params.transaction !== undefined) {
        return params.transaction;
      }
      else if (params.option !== undefined && 
        params.option.transaction !== undefined) {
        return params.option.transaction;
      }
    }
    return null;
  }

  static registerStaticFunctions(classReference)
  {
    if (!classReference || typeof classReference !== "function") {
      throw new Error('Invalid params');
    }
    Repository.getMethodNames(classReference).forEach(methodName => {
      Repository.registerStaticFunction(classReference, methodName);
    });
  }

  static registerStaticFunction(classReference, methodName)
  {
    if (!classReference || typeof classReference !== "function") {
      throw new Error('Invalid params');
    }
    if (!methodName || typeof methodName !== "string") {
      throw new Error('Invalid params');
    }
    classReference[methodName] = function(params) {
      return (new classReference())[methodName](params);
    };
  }

  static getMethodNames(classReference)
  {
    if (!classReference || typeof classReference !== "function") {
      throw new Error('Invalid params');
    }
    return [
      ...Object.getOwnPropertyNames(classReference.prototype),
      ...Object.getOwnPropertyNames(Repository.prototype),
    ].filter(methodName => {
      return methodName !== "constructor" && 
        methodName !== "length" && 
        methodName !== "prototype" && 
        methodName !== "name";
    });
  }

}

module.exports = Repository;