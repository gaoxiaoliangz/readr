import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';
import api from 'middleware/api';
import modifyResponse from 'middleware/modifyResponse';
import handleInitialState from 'utils/handleInitialState';
import createLogger from 'redux-logger';
const env = process.env.NODE_ENV;
export default function configureStore() {
    let store;
    // if(module.hot) {
    //   module.hot.accept('../reducers', () => {
    //     const nextRootReducer = require('../reducers').default
    //     store.replaceReducer(nextRootReducer)
    //   })
    // }
    // server side
    if (typeof window === 'undefined') {
        store = createStore(rootReducer, {}, applyMiddleware(thunk, api, modifyResponse));
        return store;
    }
    if (env === 'production') {
        store = createStore(rootReducer, handleInitialState(), applyMiddleware(thunk, api, modifyResponse));
    }
    else {
        store = createStore(rootReducer, handleInitialState(), compose(applyMiddleware(thunk, api, modifyResponse, createLogger({ collapsed: true }))));
    }
    return store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxPQUFPO09BQ3RELEtBQUssTUFBTSxhQUFhO09BQ3hCLFdBQVcsTUFBTSxnQkFBZ0I7T0FDakMsR0FBRyxNQUFNLGdCQUFnQjtPQUN6QixjQUFjLE1BQU0sMkJBQTJCO09BQy9DLGtCQUFrQixNQUFNLDBCQUEwQjtPQUNsRCxZQUFZLE1BQU0sY0FBYztBQU12QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQTtBQUVoQztJQUNFLElBQUksS0FBSyxDQUFBO0lBRVQsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3Qyw2REFBNkQ7SUFDN0QsNENBQTRDO0lBQzVDLE9BQU87SUFDUCxJQUFJO0lBRUosY0FBYztJQUNkLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsS0FBSyxHQUFHLFdBQVcsQ0FDakIsV0FBVyxFQUNYLEVBQUUsRUFDRixlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FDNUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekIsS0FBSyxHQUFHLFdBQVcsQ0FDakIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLEVBQ3BCLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUM1QyxDQUFBO0lBQ0gsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxHQUFHLFdBQVcsQ0FDakIsV0FBVyxFQUNYLGtCQUFrQixFQUFFLEVBQ3BCLE9BQU8sQ0FDTCxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FDN0UsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDZCxDQUFDIn0=