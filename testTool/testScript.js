const configuration = require('../src/serviceConfig');
const PROTOCOL = 'https';

const RequestHandler = require('./RequestHandler');
const { CarerApi, PatientApi} = require('./RestApis');
const host = {
    name: configuration.hostname,
    port: configuration.port
};

const rs = new RequestHandler(host, PROTOCOL);
const carerApi = new CarerApi(rs);
const patientApi = new PatientApi(rs);

function getParams(args) {
    const mode = args[0];
    const command = args[1];
    let data = null;
    if (args.length >= 3) {
        data = args[2];
    }

    return {
        mode,
        command,
        data
    }
}

function selectApi(params) {

    if (params.mode === "patient") {
        return patientApi;
    }
    else if (params.mode === "carer") {
        return carerApi;
    }
}

let params = getParams(process.argv.slice(2));
let api = selectApi(params);

if (!api) {
    console.log(`Add patient ${params.command} to carer ${params.data}`);
    patientApi.postPatientCarer(params.command, params.data);
    return;
}

const commands = {
    get: () => api.get(params.data),
    get_all: () => api.getAll(),
    relations: () => api.getPatients ? api.getPatients(params.data) : api.getCatrers(params.data),
    create: () => api.create(JSON.parse(params.data)),
    delete: () => api.delete(params.body),
    delete_all: () => api.deleteAll()
};

if (commands[params.command]) {
    commands[params.command]()
};

