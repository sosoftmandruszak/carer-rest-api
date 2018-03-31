'use strict';

const express = require('express');
const router = express.Router();

const patientRouteHandlers = require('../config/handlers/patientRouteHandlers');
const patientValidationHandlers = require('../config/handlers/patientValidationHandlers');

router.get('/list',
    patientRouteHandlers.getAllHandler);

router.get('/:id',
    patientValidationHandlers.idParamValidation,
    patientRouteHandlers.getByIdHandler);

router.get('/:id/carers',
    patientValidationHandlers.idParamValidation,
    patientRouteHandlers.getPatientCarersHandler);

router.post('/',
    patientValidationHandlers.createPatientValidation,
    patientRouteHandlers.createHandler);

router.post('/:id/add/carer/:carerId',
    patientValidationHandlers.idParamValidation,
    patientValidationHandlers.carerIdParamValidation,
    patientRouteHandlers.addPatientToCarerHandler);

router.delete('/all',
    patientRouteHandlers.deleteAllHandler);

router.delete('/:id',
    patientValidationHandlers.idParamValidation,
    patientRouteHandlers.deleteByIdHandler);

module.exports = router;
