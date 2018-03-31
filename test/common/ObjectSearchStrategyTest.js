const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const ObjectSearchStrategy = require('../../src/common/ObjectSearchStrategy');
const { NotFoundError } = require('../../src/common/errorHandling/httpErrors');

class DaoFake {
    constructor() {
        this.objectFake = {
            name: 'fakeObject'
        };
    }
    createAndSave() {
        return this.objectFake;
    }
}
describe('ObjectSearchStrategy', () => {
    let objectSearch = null;
    let searchPromiseStub = null;


    beforeEach(() => {
        objectSearch = new ObjectSearchStrategy();
        searchPromiseStub = sinon.stub(objectSearch, 'searchPromise');
    });

    describe('getObject', () => {
        it ('should return object when object found',  () => {
            let expectedResult = true;
            searchPromiseStub.returns(Promise.resolve(expectedResult));

            return expect(objectSearch.getObject()).to.be.fulfilled.and.eventually.equal(expectedResult);
        });
        it ('should throw not found error when object not found',  () => {
            searchPromiseStub.returns(Promise.resolve());

            return expect(objectSearch.getObject()).to.be.rejectedWith(NotFoundError);
        });
    });
});