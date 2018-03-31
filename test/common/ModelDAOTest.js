const sinon = require('sinon');
const assert = require('chai').assert;

const ModelDAO = require('../../src/common/dao/ModelDAO');

function createModelDAOStub() {
    return {
        createAndSave: sinon.stub(),
        findOne: sinon.spy(),
        findAll: sinon.stub(),
        destroy: sinon.stub(),
    };
}

describe ('ModelDAO', () => {
    let Model = null;
    let modelDAO = null;

    beforeEach(() => {
        Model =  createModelDAOStub();
        modelDAO = new ModelDAO(Model);
    });

    describe ('findById', () => {
        it ('should call model save method', () => {
            const id = 1;
            const expectedArgs = { where: { id } };
            modelDAO.findById(id);
            assert(Model.findOne.calledOnce);
            assert(Model.findOne.calledWith(expectedArgs));
        });

        it ('should call model save method with expected parameters', () => {
            const exampleParameter = 'exampleParameter';
            const expectedParam = { where: exampleParameter };

            modelDAO.findOne(exampleParameter);
            assert(Model.findOne.calledWith(expectedParam));
        });
    });

    describe ('findOne', () => {
        it ('should call model save method', () => {
            modelDAO.findOne();
            assert(Model.findOne.calledOnce);
        });

        it ('should call model save method with expected parameters', () => {
            const exampleParameter = 'exampleParameter';
            const expectedParam = { where: exampleParameter };

            modelDAO.findOne(exampleParameter);
            assert(Model.findOne.calledWith(expectedParam));
        });
    });

    describe ('findAll', () => {
        it ('should call model findAll method', () => {
            modelDAO.findOne();
            assert(Model.findOne.calledOnce);
        });

        it ('should call model findAll method with expected parameters', () => {
            const exampleParameter = 'exampleParameter';
            const expectedParam = { where: exampleParameter };

            modelDAO.findAll(exampleParameter);
            assert(Model.findAll.calledWith(expectedParam));
        });
    });

    describe ('destroyById', () => {
        it ('should call model save method', () => {
            const id = 1;
            const expectedArgs = { where: { id } };
            modelDAO.destroyById(id);
            assert(Model.destroy.calledOnce);
            assert(Model.destroy.calledWith(expectedArgs));
        });

        it ('should call model save method with expected parameters', () => {
            const exampleParameter = 'exampleParameter';
            const expectedParam = { where: exampleParameter };

            modelDAO.findOne(exampleParameter);
            assert(Model.findOne.calledWith(expectedParam));
        });
    });

    describe ('destroyAll', () => {
        it ('should call model destroyAll method', () => {
            modelDAO.destroyAll();
            assert(Model.destroy.calledOnce);
        });

        it ('should call model destroy method with expected parameters', () => {
            const expectedParam = { where: {} };

            modelDAO.destroyAll();
            assert(Model.destroy.calledWith(expectedParam));
        });
    });

    describe ('save', () => {

        it ('should call object save method', () => {
            const object = { save: sinon.spy() };
            modelDAO.save(object);

            assert(object.save.calledOnce);
        });
    });

    describe ('destroy', () => {

        it ('should call object destroy method', () => {
            const object = { destroy: sinon.spy() };
            modelDAO.destroy(object);

            assert(object.destroy.calledOnce);
        });
    });
});