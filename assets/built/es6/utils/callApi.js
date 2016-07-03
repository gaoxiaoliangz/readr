import 'isomorphic-fetch';
import objectToUrlencoded from 'utils/objectToUrlencoded';
import handleResponseJson from 'utils/handleResponseJson';
const defaultConfig = {
    dataType: 'json',
    method: 'GET',
    credentials: 'same-origin'
};
export function callApi(fullUrl, config = {}) {
    // return fetch config
    const parseConfig = (originanConfig) => {
        let { method, data, credentials, dataType } = Object.assign({}, defaultConfig, originanConfig);
        let fetchConfig = {};
        if (method) {
            fetchConfig.method = method;
        }
        if (credentials) {
            fetchConfig.credentials = credentials;
        }
        // handle request headers and body
        if (method === 'POST') {
            let contentType;
            let body;
            if (dataType === 'json') {
                contentType = 'application/json';
                body = JSON.stringify(data);
            }
            else if (dataType === 'urlencoded') {
                contentType = 'application/x-www-form-urlencoded';
                body = objectToUrlencoded(data);
            }
            else {
                // handle unsupported dataType
                dataType = 'urlencoded';
                contentType = 'application/x-www-form-urlencoded';
                body = objectToUrlencoded(data);
                console.warn('Unsupported dataType used "urlencoded" instead!');
            }
            fetchConfig.headers = {
                'Content-Type': contentType,
                'Access-Control-Request-Method': 'POST'
            };
            fetchConfig.body = body;
        }
        if (method === 'DELETE') {
            fetchConfig.headers = {
                'Access-Control-Request-Method': 'DELETE'
            };
        }
        return fetchConfig;
    };
    return fetch(fullUrl, parseConfig(config))
        .then(response => {
        return response.json().then(json => ({ json, response }));
    })
        .then(({ json, response }) => {
        if (response.ok) {
            return handleResponseJson(json, config.schema);
        }
        else {
            return Promise.reject(json);
        }
    });
}
export default callApi;
