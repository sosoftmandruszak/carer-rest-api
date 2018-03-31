'use strict';

const Sequelize = require('sequelize');
const sequelizeConnection = require('../../common/dababaseConnection');

const Config = sequelizeConnection.define('carer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

module.exports = Config;
