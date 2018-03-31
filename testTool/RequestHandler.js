var rp = require('request-promise');

function displayResutl(json) {

    console.log(`${json.statusCode}: ${json.request.href}}`);

    if (json.body) {
        console.log(JSON.stringify(json.body, null, 4));
    }
}


class RequestHandler {
    constructor(host, protocol) {
        this.host = host;
        this.protocol = protocol;
    }

    sendequest(host, method, path, body) {
        var options = {
            method: method,
            uri: `${this.protocol}://${host.name}${path}`,
            body,
            json: true,
            resolveWithFullResponse: true
        };

        return rp(options)
            .then((r) => {
                displayResutl(r)
            })
            .catch(function (err) {
                if (err.name = 'StatusCodeError') {
                    console.error(`${err.statusCode}: ${err.options.uri}}`);
                    console.error(err.message)
                }
            });
    };

    sendGetRequest(host, path) {
        return this.sendequest(host, 'GET', path);
    }

    sendPostRequest(host, path, data) {
        return this.sendequest(host, 'POST', path, data);
    }


    sendDeleteRequest(host, path) {
        return this.sendequest(host, 'DELETE', path);
    }
};

module.exports = RequestHandler;