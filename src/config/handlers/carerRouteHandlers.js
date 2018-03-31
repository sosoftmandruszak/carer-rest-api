'use strict';

const httpStatus = require('http-status');
const carerDAO = require('../dao/carerDAO');
const objectSearch = require('../objectSearch');
const requestAccess = require('../requestAccess');
const serializers = require('../serializers');

const getByIdHandler  = (req, res, next) => {
    objectSearch.getObject(carerDAO, req.params.id)
        .then(serializers.serializeCarer)
        .then((object) => res.json(object))
        .catch(next);
};

const getAllHandler  = (req, res, next) => {
    carerDAO.findAll()
        .then(serializers.serializeCarersList)
        .then((object) => res.json(object))
        .catch(next);
};

const createHandler = (req, res, next) => {
    const data = requestAccess.getCarerFromBody(req);

    carerDAO.createAndSave(data)
        .then((object) => {
            res.status(httpStatus.CREATED);
            return serializers.serializeCarer(object);
        })
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const getPatientsHandler = (req, res, next) => {
    objectSearch.getObject(carerDAO, req.params.id)
        .then((object) => object.getPatients())
        .then(serializers.serializePatientsList)
        .then((serialized) => res.json(serialized))
        .catch(next);
};

const deleteByIdHandler = (req, res, next) => {
    objectSearch.getObject(carerDAO, req.params.id)
        .then((object) =>  carerDAO.destroy(object))
        .then(() => res.end())
        .catch(next);
};

const deleteAllHandler = (req, res, next) => {
    carerDAO.destroyAll()
        .then(() => res.end())
        .catch(next);
};

module.exports = {
    getByIdHandler,
    getAllHandler,
    getPatientsHandler,
    createHandler,
    deleteByIdHandler,
    deleteAllHandler
};

