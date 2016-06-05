import _ from 'lodash';
// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default function paginate({ types, mapActionToKey }) {
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected types to be an array of three elements.');
    }
    if (!types.every(t => typeof t === 'string')) {
        throw new Error('Expected types to be strings.');
    }
    if (typeof mapActionToKey !== 'function') {
        throw new Error('Expected mapActionToKey to be a function.');
    }
    const [requestType, successType, failureType] = types;
    function updatePagination(state = {
            isFetching: false,
            nextPageUrl: null,
            pageCount: 0,
            ids: []
        }, action) {
        switch (action.type) {
            case requestType:
                return Object.assign({}, state, {
                    isFetching: true
                });
            case successType:
                return Object.assign({}, state, {
                    isFetching: false,
                    ids: _.union(state.ids, action.response.result),
                    nextPageUrl: action.response.nextPageUrl,
                    pageCount: state.pageCount + 1
                });
            case failureType:
                return Object.assign({}, state, {
                    isFetching: false
                });
            default:
                return state;
        }
    }
    return function updatePaginationByKey(state = {}, action) {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey(action);
                if (typeof key !== 'string') {
                    throw new Error('Expected key to be a string.');
                }
                return Object.assign({}, state, {
                    [key]: updatePagination(state[key], action)
                });
            default:
                return state;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL3JlZHVjZXJzL3BhZ2luYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLENBQUMsTUFBTSxRQUFRO0FBRXRCLDJFQUEyRTtBQUMzRSxnRUFBZ0U7QUFDaEUsaUNBQWlDLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtJQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQTtJQUNyRSxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQWMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsTUFBTSxDQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFFLEdBQUcsS0FBSyxDQUFBO0lBRXZELDBCQUEwQixLQUFLLEdBQUc7WUFDaEMsVUFBVSxFQUFFLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixHQUFHLEVBQUUsRUFBRTtTQUNSLEVBQUUsTUFBTTtRQUNQLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssV0FBVztnQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakIsQ0FBQyxDQUFBO1lBQ0osS0FBSyxXQUFXO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7b0JBQzlCLFVBQVUsRUFBRSxLQUFLO29CQUNqQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUMvQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXO29CQUN4QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDO2lCQUMvQixDQUFDLENBQUE7WUFDSixLQUFLLFdBQVc7Z0JBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtvQkFDOUIsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKO2dCQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsK0JBQStCLEtBQUssR0FBRyxFQUFFLEVBQUUsTUFBTTtRQUN0RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLFdBQVc7Z0JBQ2QsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUVsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUE7Z0JBQ2pELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtvQkFDOUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDO2lCQUM1QyxDQUFDLENBQUE7WUFDSjtnQkFDRSxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2hCLENBQUM7SUFDSCxDQUFDLENBQUE7QUFDSCxDQUFDIn0=