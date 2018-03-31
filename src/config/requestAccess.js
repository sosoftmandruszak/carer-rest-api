'use strict';

module.exports = {
    getPatientFromBody(request) {
        const  body = request.body;

        return {
            firstName: body.firstName,
            lastName: body.lastName,
            birthDate: body.birthDate,
            country: body.country
        }
    },
    getCarerFromBody(request) {
        const  body = request.body;

        return {
            firstName: body.firstName,
            lastName: body.lastName
        }
    }
}