'use strict';

const ModelDAO = require('../../common/dao/ModelDAO');
const PatientModel = require('../model/PatientModel');

class PatientDAO extends ModelDAO {
    constructor() {
        super(PatientModel);
    }
}

module.exports = new PatientDAO();
