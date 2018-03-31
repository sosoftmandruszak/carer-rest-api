'use strict';

const _ = require('underscore');

function serializePatient(object) {
    return {
        id: object.id,
        firstName: object.firstName,
        lastName: object.lastName,
        birthDate: object.birthDate,
        country: object.country
    }
}


function serializeCarer(object) {
    return {
        id: object.id,
        firstName: object.firstName,
        lastName: object.lastName,
    }
}

function ModelsListToObject(list, transformation) {
    return _.map(list, (object) => {
        return transformation(object)
    })
}

function serializePatientsList (list) {
    return ModelsListToObject(list, serializePatient);
}

function serializeCarersList (list) {
    return ModelsListToObject(list, serializeCarer);
}

module.exports = {
    serializePatient,
    serializeCarer,
    serializePatientsList,
    serializeCarersList
};
