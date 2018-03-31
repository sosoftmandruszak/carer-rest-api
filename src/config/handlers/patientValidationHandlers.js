'use strict';

const { check, body, param } = require('express-validator/check');
const carerRouteHandlers = require('./carerRouteHandlers');
const validationHandler = require('../../common/validationHandler');

const idParamNumberValidation = param('id')
    .isNumeric()
    .withMessage('Id must be a number');

const carerIdParamNumberValidation = param('carerId')
    .isNumeric()
    .withMessage('carerId must be a number');

const idParamPositiveIntValidation = param('id')
    .custom((value, { req }) => {
        return parseInt(value) > 0
    })
    .withMessage('Id be a positive number');

const carerIdParamPositiveIntValidation = param('carerId')
    .exists()
    .custom((value, { req }) => {
        return parseInt(value) > 0
    })
    .withMessage('carerId be a positive number');

const firstNameBodyValidation = body('firstName')
    .exists()
    .isAlpha()
    .withMessage('Firstname must be an alpha string');

const lastNameBodyValidation = body('lastName')
    .exists()
    .isAlpha()
    .withMessage('Lastname must be an alpha string');

const countryBodyValidation = body('country')
    .exists()
    .isAlpha()
    .withMessage('Country must be an alpha string');

const birthDateBodyValidation = body('birthDate')
    .exists()
    .custom((value, { req }) => {
        return value ? value.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/).length: false;
    })
    .withMessage('Birth date must be in format YYYY-MM-DD');

const idParamValidation = validationHandler.create([
    idParamNumberValidation,
    idParamPositiveIntValidation]);

const carerIdParamValidation = validationHandler.create([
    carerIdParamNumberValidation,
    carerIdParamPositiveIntValidation]);

const createPatientValidation = validationHandler.create([
    firstNameBodyValidation,
    lastNameBodyValidation,
    countryBodyValidation,
    birthDateBodyValidation]);

module.exports = {
    idParamValidation,
    carerIdParamValidation,
    createPatientValidation
};
