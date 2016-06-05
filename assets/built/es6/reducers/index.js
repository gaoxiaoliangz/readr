import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notification from './notification';
import paginate from './paginate';
import _ from 'lodash';
// Updates an entity cache in response to any action with response.entities.
function entities(state = { books: {}, users: {} }, action) {
    if (action.response && action.response.entities) {
        return _.merge({}, state, action.response.entities);
    }
    return state;
}
// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action;
    // if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    //   return null
    // }
    if (error) {
        return action.error;
    }
    return state;
}
function session(state = { user: { role: 'visitor' } }, action) {
    switch (action.type) {
        case 'USER_AUTH_REQUEST':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'USER_AUTH_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                user: action.response
            });
        case 'USER_AUTH_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                user: action.response
            });
        default:
            return state;
    }
}
// Updates the pagination data for different actions.
const pagination = combineReducers({
    // bookList: paginate({
    //   mapActionToKey: action => action.filter,
    //   types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE']
    // }),
    filteredBooks: paginate({
        mapActionToKey: action => action.flow,
        types: ['BOOKS_REQUEST', 'BOOKS_SUCCESS', 'BOOKS_FAILURE']
    }),
    userList: paginate({
        // TODO
        mapActionToKey: action => 'all',
        types: ['USER_LIST_REQUEST', 'USER_LIST_SUCCESS', 'USER_LIST_FAILURE'],
    }),
    doubanBookSearchResults: paginate({
        mapActionToKey: action => action.query,
        types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE']
    }),
    bookSearchResults: paginate({
        mapActionToKey: action => action.query,
        types: ['BOOK_SEARCH_REQUEST', 'BOOK_SEARCH_SUCCESS', 'BOOK_SEARCH_FAILURE']
    })
});
const components = combineReducers({
    notification: notification
});
const rootReducer = combineReducers({
    components,
    routing,
    entities,
    pagination,
    session
});
export default rootReducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sT0FBTztPQUNoQyxFQUFFLGFBQWEsSUFBSSxPQUFPLEVBQUUsTUFBTSxvQkFBb0I7T0FDdEQsWUFBWSxNQUFNLGdCQUFnQjtPQUNsQyxRQUFRLE1BQU0sWUFBWTtPQUMxQixDQUFDLE1BQU0sUUFBUTtBQUV0Qiw0RUFBNEU7QUFDNUUsa0JBQWtCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU07SUFDeEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFBO0FBQ2QsQ0FBQztBQUVELDREQUE0RDtBQUM1RCxzQkFBc0IsS0FBSyxHQUFHLElBQUksRUFBRSxNQUFNO0lBQ3hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFBO0lBRTlCLGtEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsSUFBSTtJQUNKLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQTtBQUNkLENBQUM7QUFFRCxpQkFBaUIsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsTUFBTTtJQUM1RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLG1CQUFtQjtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUM5QixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7UUFFSixLQUFLLG1CQUFtQjtZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUM5QixVQUFVLEVBQUUsS0FBSztnQkFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQ3RCLENBQUMsQ0FBQTtRQUVKLEtBQUssbUJBQW1CO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzlCLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7YUFDdEIsQ0FBQyxDQUFBO1FBRUo7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRUQscURBQXFEO0FBQ3JELE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQztJQUNqQyx1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLDJFQUEyRTtJQUMzRSxNQUFNO0lBQ04sYUFBYSxFQUFFLFFBQVEsQ0FBQztRQUN0QixjQUFjLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJO1FBQ3JDLEtBQUssRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO0tBQzNELENBQUM7SUFDRixRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ2pCLE9BQU87UUFDUCxjQUFjLEVBQUUsTUFBTSxJQUFJLEtBQUs7UUFDL0IsS0FBSyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7S0FDdkUsQ0FBQztJQUNGLHVCQUF1QixFQUFFLFFBQVEsQ0FBQztRQUNoQyxjQUFjLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ3RDLEtBQUssRUFBRSxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QixFQUFFLDRCQUE0QixDQUFDO0tBQ2xHLENBQUM7SUFDRixpQkFBaUIsRUFBRSxRQUFRLENBQUM7UUFDMUIsY0FBYyxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSztRQUN0QyxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQztLQUM3RSxDQUFDO0NBQ0gsQ0FBQyxDQUFBO0FBRUYsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDO0lBQ2pDLFlBQVksRUFBRSxZQUFZO0NBQzNCLENBQUMsQ0FBQTtBQUVGLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztJQUNsQyxVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztDQUNSLENBQUMsQ0FBQTtBQUVGLGVBQWUsV0FBVyxDQUFBIn0=