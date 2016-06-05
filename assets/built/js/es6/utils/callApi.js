import 'isomorphic-fetch';
import { normalize } from 'normalizr';
import humps from 'humps';
import objectToUrlencoded from 'utils/objectToUrlencoded';
export function handleResponseJson(json, schema) {
    json = humps.camelizeKeys(json);
    let result = json;
    if (typeof schema !== 'undefined') {
        result = Object.assign({}, normalize(json, schema));
    }
    return result;
}
export function callApi(options) {
    let { fullUrl, method, data, schema, includeCredentials, useJsonp, contentType } = options;
    const handleFetchConfig = () => {
        let config = {};
        let body;
        if (typeof method === 'undefined' || method === 'GET' || method === 'get') {
            config.method = 'GET';
        }
        else if (method === 'POST' || method === 'post') {
            // 默认不带 credentials
            if (includeCredentials === true) {
                config.credentials = 'include';
            }
            // contentType 默认 urlencoded
            if (typeof contentType === 'undefined' || contentType === 'urlencoded') {
                contentType = 'application/x-www-form-urlencoded';
                body = objectToUrlencoded(data);
            }
            else if (contentType === 'json') {
                contentType = 'application/json';
                body = JSON.stringify(data);
            }
            config = Object.assign({}, config, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': contentType,
                    'Access-Control-Request-Method': 'POST'
                },
                body
            });
        }
        else {
            console.error('Unsupported method');
        }
        return config;
    };
    const handleJsonp = () => {
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
    };
    if (useJsonp === true) {
        return handleJsonp();
    }
    return fetch(fullUrl, handleFetchConfig())
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
export default callApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvY2FsbEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxrQkFBa0I7T0FDbEIsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXO09BQzlCLEtBQUssTUFBTSxPQUFPO09BQ2xCLGtCQUFrQixNQUFNLDBCQUEwQjtBQUl6RCxtQ0FBbUMsSUFBSSxFQUFFLE1BQU07SUFDN0MsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBRWpCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUN2QixTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUN4QixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDZixDQUFDO0FBYUQsd0JBQXdCLE9BQXVCO0lBQzdDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtJQUUxRixNQUFNLGlCQUFpQixHQUFHO1FBTXhCLElBQUksTUFBTSxHQUFlLEVBQUUsQ0FBQTtRQUMzQixJQUFJLElBQUksQ0FBQTtRQUVSLEVBQUUsQ0FBQSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssS0FBSyxJQUFJLE1BQU0sS0FBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLE1B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