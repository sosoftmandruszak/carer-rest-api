'use strict';

const { check, body, param } = require('express-validator/check');
const validationHandler = require('../../common/validationHandler');

const idParamNumberValidation = param('id')
    .exists()
    .isNumeric()
    .withMessage('Id must be a number');

const idParamPositiveIntValidation = param('id')
    .exists()
    .custom((value, { req }) => {
        return parseInt(value) > 0
    })
    .withMessage('Id be a positive number');

const firstNameBodyValidation = body('firstName')
    .exists()
    .isAlpha()
    .withMessage('Firstname must be an alpha string');

const lastNameBodyValidation = body('lastName')
    .exists()
    .isAlpha()
    .withMessage('Lastname must be an alpha string');

const idParamValidation = validationHandler.create([
    idParamNumberValidation,
    idParamPositiveIntValidation]);

const createCarerValidation = validationHandler.create([
    firstNameBodyValidation,
    lastNameBodyValidation]);

module.exports = {
    idParamValidation,
    createCarerValidation
};
