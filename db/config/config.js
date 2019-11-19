'use strict'

function createConnectionConfig(host) {
  return {
    host,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
}

const sequelizeConfig = {
  development: {
    replication: {
      read: [],
      write: createConnectionConfig(process.env.DB_HOST)
    },
    logging: process.env.DISABLE_SEQUELIZE_LOGGING ? null : console.log,
    dialect: 'postgres',
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'SequelizeMigrations',
    // Disables the use of $ sequelize operators throughout the code base
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators-aliases
    operatorsAliases: false,
    pool: {
      min: process.env.DB_MIN_CONNECTIONS || 0,
      max: process.env.DB_MAX_CONNECTIONS || 5,
      idle: process.env.DB_IDLE || 20000,
      acquire: process.env.DB_IDLE
    }
  },
  test: {
    dialect: 'postgres',
    host: 'plsnoconnect',
    operatorsAliases: false
  }
}

// If no DB_HOST_REPLICA comma-separated list is specified, just use the master
const readHosts = process.env.DB_HOST_REPLICA
  ? process.env.DB_HOST_REPLICA.split(',')
  : [process.env.DB_HOST]

readHosts.forEach(readHost => {
  sequelizeConfig.development.replication.read.push(
    createConnectionConfig(readHost)
  )
})

module.exports = sequelizeConfig
