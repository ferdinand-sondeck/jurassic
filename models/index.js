const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Incident = require('./incident')(sequelize, DataTypes);

module.exports = db;