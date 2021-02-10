
const { set: _set, get: _get } = require('lodash');
const fs = require('fs');

const APP_DIRECTORY = __basedir;
const CONFIG_DIRECTORY = APP_DIRECTORY + '/storage/config';
const CONFIG_FILE = 'config.json';

class Config
{
  
  static set(key, value, params = null)
  {
    try {
      const setting = getSetting(params);
      let config = Config.all(params);
      if (!config) {
        config = {};
      }
      config = _set(config, key, value);
      const jsonString = JSON.stringify(config, null, 2);
      fs.writeFileSync(setting.config.path, jsonString);
      return true;
    } catch(err) {
      return false;
    }
  }

  static get(key, params = null)
  {
    try {
      const config = Config.all(params);
      return _get(config, key);
    } catch(err) {
      return null;
    }
  }

  static all(params = null)
  {
    try {
      const setting = getSetting(params);
      const jsonString = fs.readFileSync(setting.config.path);
      const config = JSON.parse(jsonString);
      return config;
    } catch(err) {
      return null;
    }
  }

}

const getSetting = (params) => {
  let file = CONFIG_FILE;
  let directory = CONFIG_DIRECTORY;
  if (params) {
    if (params.file) {
      file = params.file;
    }
    if (params.directory) {
      directory = APP_DIRECTORY + '/' + params.directory;
    }
  }
  return {
    config: {
      file: file,
      directory: directory,
      path: directory + '/' + file
    }
  };
};

module.exports = Config;