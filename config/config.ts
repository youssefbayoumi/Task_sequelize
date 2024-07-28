import { Dialect, Sequelize } from 'sequelize';
import { config as dotenvConfig } from 'dotenv';
import { URL } from 'url';

dotenvConfig();

// const databaseUrl = new URL(process.env.POSTGRES_URL as string);
const databaseUrl = new URL("postgres://postgres:123@10.0.11.64:5432/database_t2");

const sequelize = new Sequelize({
  username: databaseUrl.username,
  password: databaseUrl.password,
  database: databaseUrl.pathname.substring(1),
  host: databaseUrl.hostname,
  port: Number(databaseUrl.port),
  dialect: 'postgres' as Dialect
});

export default sequelize;
