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
    const parseConfig = (config) => {
        let config2 = Object.assign({}, defaultConfig, config);
        let { method, data, schema, credentials, dataType } = config2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvY2FsbEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxrQkFBa0I7T0FDbEIsa0JBQWtCLE1BQU0sMEJBQTBCO09BQ2xELGtCQUFrQixNQUFNLDBCQUEwQjtBQVd6RCxNQUFNLGFBQWEsR0FBa0I7SUFDbkMsUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLEtBQUs7SUFDYixXQUFXLEVBQUUsYUFBYTtDQUMzQixDQUFBO0FBRUQsd0JBQXdCLE9BQWUsRUFBRSxNQUFNLEdBQWtCLEVBQUU7SUFDakUsc0JBQXNCO0lBQ3RCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBcUI7UUFDeEMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RELElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFBO1FBQzdELElBQUksV0FBVyxHQUtYLEVBQUUsQ0FBQTtRQUVOLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVixXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUM3QixDQUFDO1FBRUQsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNmLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQ3ZDLENBQUM7UUFFRCxrQ0FBa0M7UUFDbEMsRUFBRSxDQUFBLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxXQUFXLENBQUE7WUFDZixJQUFJLElBQUksQ0FBQTtZQUVSLEVBQUUsQ0FBQSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixXQUFXLEdBQUcsa0JBQWtCLENBQUE7Z0JBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFdBQVcsR0FBRyxtQ0FBbUMsQ0FBQTtnQkFDakQsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTiw4QkFBOEI7Z0JBQzlCLFFBQVEsR0FBRyxZQUFZLENBQUE7Z0JBQ3ZCLFdBQVcsR0FBRyxtQ0FBbUMsQ0FBQTtnQkFDakQsSUFBSSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUE7WUFDakUsQ0FBQztZQUVELFdBQVcsQ0FBQyxPQUFPLEdBQUc7Z0JBQ3BCLGNBQWMsRUFBRSxXQUFXO2dCQUMzQiwrQkFBK0IsRUFBRSxNQUFNO2FBQ3hDLENBQUE7WUFFRCxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUN6QixDQUFDO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQTtJQUNwQixDQUFDLENBQUE7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkMsSUFBSSxDQUFDLFFBQVE7UUFDWixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDM0QsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1FBQ3ZCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEQsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0IsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUVELGVBQWUsT0FBTyxDQUFBIn0=