'use strict';

const ObjectSearchStrategy = require('../common/ObjectSearchStrategy');

class ObjectSearch extends ObjectSearchStrategy {
    searchPromise(dao, id) {
        return dao.findById(id);
    }
}

module.exports = new ObjectSearch();
