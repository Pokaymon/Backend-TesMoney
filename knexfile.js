import config from "./src/config.js";

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
    },
    migrations: {
      directory: './src/migrations'
    }
  }
};
