import callApi from 'utils/callApi';
import ApiRoots from 'constants/ApiRoots';
export default store => next => action => {
    const CALL_API = action.CALL_API;
    if (typeof CALL_API === 'undefined') {
        return next(action);
    }
    let { endpoint, apiUrl, extendedOptions } = CALL_API;
    const { types, schema } = CALL_API;
    const [requestType, successType, failureType] = types;
    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction.CALL_API;
        return finalAction;
    }
    next(actionWith({ type: requestType }));
    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }
    if (typeof apiUrl === 'undefined') {
        apiUrl = ApiRoots.LOCAL;
    }
    const fullUrl = apiUrl + endpoint;
    let options = { fullUrl, schema };
    if (typeof extendedOptions !== 'undefined') {
        options = Object.assign({}, options, extendedOptions);
    }
    return callApi(options).then(response => next(actionWith({
        response,
        type: successType
    })), error => next(actionWith({
        type: failureType,
        error: error.message || 'Oops!'
    })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9taWRkbGV3YXJlL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxPQUFPLE1BQU0sZUFBZTtPQUM1QixRQUFRLE1BQU0sb0JBQW9CO0FBRXpDLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxRQUFRLENBQUE7SUFDcEQsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUE7SUFDbEMsTUFBTSxDQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFFLEdBQUcsS0FBSyxDQUFBO0lBRXZELG9CQUFvQixJQUFJO1FBQ3RCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNuRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUE7UUFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUE7SUFFckMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxFQUFFLENBQUEsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFBO0lBQ2pDLElBQUksT0FBTyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFBO0lBRWpDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sZUFBZSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzFCLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFCLFFBQVE7UUFDUixJQUFJLEVBQUUsV0FBVztLQUNsQixDQUFDLENBQUMsRUFDSCxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QixJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPO0tBQ2hDLENBQUMsQ0FBQyxDQUNKLENBQUE7QUFDSCxDQUFDLENBQUEifQ==