const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306, // MySQL default port
  username: 'root',
  password: 'Sana@123',
  database: 'today',
});

module.exports = sequelize;