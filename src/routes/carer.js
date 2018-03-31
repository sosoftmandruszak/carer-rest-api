'use strict';

const express = require('express');
const router = express.Router();

const carerValidationHandlers = require('../config/handlers/carerValidationHandlers');
const carerRouteHandlers = require('../config/handlers/carerRouteHandlers');

router.get('/list', carerRouteHandlers.getAllHandler);

router.get('/:id',
    carerValidationHandlers.idParamValidation,
    carerRouteHandlers.getByIdHandler);

router.get('/:id/patients',
    carerValidationHandlers.idParamValidation,
    carerRouteHandlers.getPatientsHandler);

router.post('/',
    carerValidationHandlers.createCarerValidation,
    carerRouteHandlers.createHandler);

router.delete('/all',
    carerRouteHandlers.deleteAllHandler);

router.delete('/:id',
    carerValidationHandlers.idParamValidation,
    carerRouteHandlers.deleteByIdHandler);

module.exports = router;