'use strict';

const Carer = require('./CarerModel');
const Patient = require('./PatientModel');

Carer.belongsToMany(Patient, {through: 'carer_patient', foreignKey: 'parentId'})
Patient.belongsToMany(Carer, {through: 'carer_patient', foreignKey: 'childId'})
