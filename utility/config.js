
module.exports = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    env: process.env.APP_ENV,
    debug: process.env.APP_DEBUG,
    url: process.env.APP_URL,
    timezone: process.env.APP_TIMEZONE,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },
  dbSql: {
    connection: process.env.DB_MAIN_CONNECTION,
    host: process.env.DB_MAIN_HOST,
    port: process.env.DB_MAIN_PORT,
    database: process.env.DB_MAIN_DATABASE,
    username: process.env.DB_MAIN_USERNAME,
    password: process.env.DB_MAIN_PASSWORD,
    timezone: process.env.DB_MAIN_TIMEZONE,
    log: process.env.DB_MAIN_LOG,
  },
  dbDocument: {
    connection: process.env.DB_DOCUMENT_CONNECTION,
  },
  messagingMain: {
    connection: process.env.MG_MAIN_CONNECTION,
  }
};