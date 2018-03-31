'use strict';

class ModelDAO {
    constructor(model) {
        this.Model = model;
    }

    createAndSave(data) {
        const object = new this.Model(data);
        return this.save(object);
    }

    save(object) {
        return object.save();
    }

    destroy(object) {
        return object.destroy();
    }

    findById(id) {
        return this.Model.findOne({ where: { id } });
    }

    findOne(where) {
        return this.Model.findOne({ where });
    }

    findAll(where) {
        return this.Model.findAll({ where });
    }

    destroyById(id) {
        return this.Model.destroy({ where: { id } });
    }

    destroyAll() {
        return this.Model.destroy({ where: {}});
    }
}

module.exports = ModelDAO;