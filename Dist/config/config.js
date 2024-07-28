"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
const url_1 = require("url");
(0, dotenv_1.config)();
// const databaseUrl = new URL(process.env.POSTGRES_URL as string);
const databaseUrl = new url_1.URL("postgres://postgres:123@10.0.11.64:5432/database_t2");
const sequelize = new sequelize_1.Sequelize({
    username: databaseUrl.username,
    password: databaseUrl.password,
    database: databaseUrl.pathname.substring(1),
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port),
    dialect: 'postgres'
});
exports.default = sequelize;
