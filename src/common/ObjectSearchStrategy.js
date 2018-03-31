'use strict';

const { NotFoundError, InternalServerError } = require('./errorHandling/httpErrors');

class ObjectSearchStrategy {

    searchPromise() { return Promise.reject(new InternalServerError()); }

    getObject(dao, parameters) {
        return this.searchPromise(dao, parameters)
            .then(object => {

                if (object) {
                    return object;
                }

                throw new NotFoundError('Object not found');
            });
    }
}

module.exports = ObjectSearchStrategy;