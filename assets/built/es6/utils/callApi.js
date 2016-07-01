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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvdXRpbHMvY2FsbEFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxrQkFBa0I7T0FDbEIsa0JBQWtCLE1BQU0sMEJBQTBCO09BQ2xELGtCQUFrQixNQUFNLDBCQUEwQjtBQVd6RCxNQUFNLGFBQWEsR0FBa0I7SUFDbkMsUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLEtBQUs7SUFDYixXQUFXLEVBQUUsYUFBYTtDQUMzQixDQUFBO0FBRUQsd0JBQXdCLE9BQWUsRUFBRSxNQUFNLEdBQWtCLEVBQUU7SUFDakUsc0JBQXNCO0lBQ3RCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBcUI7UUFDeEMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RELElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFBO1FBQzdELElBQUksV0FBVyxHQUtYLEVBQUUsQ0FBQTtRQUVOLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUM3QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQixXQUFXLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUN2QyxDQUFDO1FBRUQsa0NBQWtDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksV0FBVyxDQUFBO1lBQ2YsSUFBSSxJQUFJLENBQUE7WUFFUixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsV0FBVyxHQUFHLGtCQUFrQixDQUFBO2dCQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxXQUFXLEdBQUcsbUNBQW1DLENBQUE7Z0JBQ2pELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sOEJBQThCO2dCQUM5QixRQUFRLEdBQUcsWUFBWSxDQUFBO2dCQUN2QixXQUFXLEdBQUcsbUNBQW1DLENBQUE7Z0JBQ2pELElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1lBQ2pFLENBQUM7WUFFRCxXQUFXLENBQUMsT0FBTyxHQUFHO2dCQUNwQixjQUFjLEVBQUUsV0FBVztnQkFDM0IsK0JBQStCLEVBQUUsTUFBTTthQUN4QyxDQUFBO1lBRUQsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDekIsQ0FBQztRQUVELE1BQU0sQ0FBQyxXQUFXLENBQUE7SUFDcEIsQ0FBQyxDQUFBO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDLElBQUksQ0FBQyxRQUFRO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtRQUN2QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBRUQsZUFBZSxPQUFPLENBQUEifQ==