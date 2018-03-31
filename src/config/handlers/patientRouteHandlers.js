'use strict';

const httpStatus = require('http-status');
const patientDAO = require('../dao/patientDAO');
const carerDAO = require('../dao/carerDAO');
const requestAccess = require('../requestAccess');
const patientSearch = require('../objectSearch');
const serializers = require('../serializers');

const getAllHandler = (req, res, next) => {
    patientDAO.findAll()
        .then(serializers.serializePatientsList)
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const getByIdHandler = (req, res, next) => {
    patientSearch.getObject(patientDAO, req.params.id)
        .then(serializers.serializePatient)
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const createHandler = (req, res, next) => {
    const data = requestAccess.getPatientFromBody(req);

    patientDAO.createAndSave(data)
        .then((object) => {
            res.status(httpStatus.CREATED);
            return object;
        })
        .then(serializers.serializePatient)
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const getPatientCarersHandler = (req, res, next) => {
    patientSearch.getObject(patientDAO, req.params.id)
        .then((object) => object.getCarers())
        .then(serializers.serializeCarersList)
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const addPatientToCarerHandler = (req, res, next) => {
    let patient = null;

    patientSearch.getObject(patientDAO, req.params.id)
        .then((object) => {
            patient = object;
            return patientSearch.getObject(carerDAO, req.params.carerId)
        })
        .then((carer) => patient.addCarer(carer))
        .then((relations) => {
            if (relations.length) {
                res.status(httpStatus.CREATED);
            }

            res.end()
        })
        .catch(next);
};

const deleteByIdHandler = (req, res, next) => {
    patientSearch.getObject(patientDAO, req.params.id)
        .then((object) =>  patientDAO.destroy(object))
        .then(() => res.end())
        .catch(next);
};

const deleteAllHandler = (req, res, next) => {
    patientDAO.destroyAll()
        .then(() => res.end())
        .catch(next);
};

module.exports = {
    getAllHandler,
    getByIdHandler,
    getPatientCarersHandler,
    createHandler,
    addPatientToCarerHandler,
    deleteByIdHandler,
    deleteAllHandler
};
