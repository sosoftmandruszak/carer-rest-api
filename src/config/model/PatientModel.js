'use strict';

const Sequelize = require('sequelize');
const sequelizeConnection = require('../../common/dababaseConnection');

const Property = sequelizeConnection.define('patient', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthDate: Sequelize.DATE,
    country: Sequelize.STRING,
    //first name, last name, date of birth and country
});

module.exports = Property;
