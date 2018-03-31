
class RestApi {
    constructor(sender, type) {
        this.type = type;
        this.sender = sender;
        this.host = sender.host;
    }

    get(id) {
        return this.sender.sendGetRequest(this.host, `/${this.type}/${id}`);
    }

    getAll() {
        return this.sender.sendGetRequest(this.host, `/${this.type}/list`);
    }

    create(data) {
        console.log(JSON.stringify(data, null, 4))
        return this.sender.sendPostRequest(this.host, `/${this.type}/`, data);
    }

    delete(id) {
        return this.sender.sendDeleteRequest(this.host, `/${this.type}${id}`);
    }

    deleteAll() {
        return this.sender.sendDeleteRequest(this.host, `/${this.type}/all`);
    }
}

class CarerApi extends RestApi {
    constructor(sender) {
        super(sender, 'carer');
    }


    getPatients(id) {
        return this.sender.sendGetRequest(this.host, `/${this.type}/${id}/patients`);
    }
}
class PatientApi extends RestApi {
    constructor(sender) {
        super(sender, 'patient');
    }

    getCatrers(id) {
        return this.sender.sendGetRequest(this.host, `/${this.type}/${id}/carers`);
    }

    postPatientCarer(id, carerId) {
        return this.sender.sendPostRequest(this.host, `/${this.type}/${id}/add/carer/${carerId}`);
    }
}

module.exports = {
    PatientApi,
    CarerApi
};