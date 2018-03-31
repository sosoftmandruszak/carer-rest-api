'use strict';

const ModelDAO = require('../../common/dao/ModelDAO');
const CarerModel = require('../model/CarerModel');

class CarerDAO extends ModelDAO {
    constructor() {
        super(CarerModel);
    }
}

module.exports = new CarerDAO();
