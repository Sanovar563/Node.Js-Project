const snowflake = require('snowflake-promise');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Community = require('./community');
const User = require('./user');
const Role = require('./role');

const Member = sequelize.define('Members', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  community: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Community,
      key: 'id',
    },
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Role,
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Member;
