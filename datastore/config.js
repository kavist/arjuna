
const { set: _set, get: _get } = require('lodash');
const path = require('path');
const fs = require('fs');

const DEFAULT_CONFIG_FILE_NAME = 'config.json';
const DEFAULT_CONFIG_FILE_DIR = 'storage';

class Config
{

  static set(params)
  {
    if (!params) {
      throw new Error('Invalid params');
    }
    if (typeof params.key !== "string") {
      throw new Error('Invalid params');
    }
    if (params.value === undefined) {
      throw new Error('Invalid params');
    }

    const setting = Config.getSetting(params);

    let config = Config.all(params) || {};
    config = _set(config, params.key, params.value);
    
    const jsonString = JSON.stringify(config, null, 2);
    fs.writeFileSync(
      path.join(setting.path), 
      jsonString
    );
  }

  static get(params)
  {
    if (!params) {
      throw new Error('Invalid params');
    }
    if (typeof params.key !== "string") {
      throw new Error('Invalid params');
    }
    
    const config = Config.all(params) || {};
    return _get(config, params.key);
  }

  static all(params = null)
  {
    const setting = Config.getSetting(params);
    const jsonString = fs.readFileSync(
      path.join(setting.path)
    );
    return JSON.parse(jsonString);
  }

  static getSetting(params = null)
  {
    let file = DEFAULT_CONFIG_FILE_NAME;
    let directory = DEFAULT_CONFIG_FILE_DIR;

    if (params) {
      if (typeof params.file === "string") {
        file = params.file;
      }
      if (typeof params.directory === "string") {
        directory = params.directory;
      }
    }
    
    return {
      file: file,
      directory: directory,
      path: `${directory}/${file}`
    };
  }

}

module.exports = Config;