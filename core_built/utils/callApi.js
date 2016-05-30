import 'isomorphic-fetch';
import { normalize } from 'normalizr';
import humps from 'humps';
export function handleResponseJson(json, schema) {
    json = humps.camelizeKeys(json);
    let result = json;
    if (typeof schema !== 'undefined') {
        result = Object.assign({}, normalize(json, schema));
    }
    return result;
}
export function callApi(options) {
    let { fullUrl, method, data, schema, includeCredentials, useJsonp } = options;
    // TODO: jsonp.js
    if (useJsonp === true) {
        if (fullUrl.indexOf('douban') !== -1) {
            let id = new Date().valueOf();
            let jsonpId = 'jsonp-' + id;
            let jsonpCallback = 'jsonpCallback' + id;
            let jsonpCallbackData = `__JSONP_DATA_${id}__`;
            window[jsonpCallback] = function (data) {
                window[jsonpCallbackData] = data;
            };
            let script = document.createElement('script');
            script.setAttribute('src', `${fullUrl}&callback=${jsonpCallback}`);
            script.setAttribute('id', jsonpId);
            document.body.appendChild(script);
            return new Promise(resolve => {
                script.onload = function () {
                    document.body.removeChild(document.getElementById(jsonpId));
                    let json = window[jsonpCallbackData];
                    resolve(handleResponseJson(json, schema));
                };
            });
        }
    }
    else {
        let config;
        if (includeCredentials !== false) {
            config.credentials = 'include';
        }
        if (typeof method === 'undefined') {
            config.method = 'GET';
        }
        else if (method === 'POST' || method === 'post') {
            config = Object.assign({}, config, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        else {
            config.method = method;
        }
        return fetch(fullUrl, config)
            .then(response => {
            return response.json().then(json => ({ json, response }));
        })
            .then(({ json, response }) => {
            if (response.ok) {
                return handleResponseJson(json, schema);
            }
            else {
                return Promise.reject(json);
            }
        });
    }
}
export default callApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvY2FsbEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxrQkFBa0I7T0FDbEIsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXO09BQzlCLEtBQUssTUFBTSxPQUFPO0FBR3pCLG1DQUFtQyxJQUFJLEVBQUUsTUFBTTtJQUM3QyxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFFakIsRUFBRSxDQUFBLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQ3hCLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQTtBQUNmLENBQUM7QUFFRCx3QkFBd0IsT0FBTztJQUM3QixJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQTtJQUU3RSxpQkFBaUI7SUFDakIsRUFBRSxDQUFBLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUM3QixJQUFJLE9BQU8sR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFBO1lBQzNCLElBQUksYUFBYSxHQUFHLGVBQWUsR0FBRyxFQUFFLENBQUE7WUFDeEMsSUFBSSxpQkFBaUIsR0FB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