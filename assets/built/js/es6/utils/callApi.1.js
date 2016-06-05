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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbEFwaS4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC91dGlscy9jYWxsQXBpLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sa0JBQWtCO09BQ2xCLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVztPQUM5QixLQUFLLE1BQU0sT0FBTztBQUd6QixtQ0FBbUMsSUFBSSxFQUFFLE1BQU07SUFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBRWpCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUN2QixTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUN4QixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsd0JBQXdCLE9BQU87SUFDN0IsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUE7SUFFN0UsaUJBQWlCO0lBQ2pCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDN0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQTtZQUMzQixJQUFJLGFBQWEsR0FBRyxlQUFlLEdBQUcsRUFBRSxDQUFBO1lBQ3hDLElB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