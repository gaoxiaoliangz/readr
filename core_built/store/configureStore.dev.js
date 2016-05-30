import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers/index';
import api from 'middleware/api';
import modifyResponse from 'middleware/modifyResponse';
import handleInitialState from 'utils/handleInitialState';
export default function configureStore() {
    // if(module.hot) {
    //   module.hot.accept('../reducers', () => {
    //     const nextRootReducer = require('../reducers').default
    //     store.replaceReducer(nextRootReducer)
    //   })
    // }
    if (typeof window === 'undefined') {
        return createStore(rootReducer, {}, compose(applyMiddleware(thunk, api, modifyResponse)));
    }
    return createStore(rootReducer, handleInitialState(), compose(applyMiddleware(thunk, api, modifyResponse, createLogger({ collapsed: true }))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlU3RvcmUuZGV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9mcm9udGVuZC9zdG9yZS9jb25maWd1cmVTdG9yZS5kZXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE9BQU87T0FDdEQsS0FBSyxNQUFNLGFBQWE7T0FDeEIsWUFBWSxNQUFNLGNBQWM7T0FDaEMsV0FBVyxNQUFNLGdCQUFnQjtPQUNqQyxHQUFHLE1BQU0sZ0JBQWdCO09BQ3pCLGNBQWMsTUFBTSwyQkFBMkI7T0FDL0Msa0JBQWtCLE1BQU0sMEJBQTBCO0FBRXpEO0lBQ0UsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3Qyw2REFBNkQ7SUFDN0QsNENBQTRDO0lBQzVDLE9BQU87SUFDUCxJQUFJO0lBRUosRUFBRSxDQUFBLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsV0FBVyxDQUNoQixXQUFXLEVBQ1gsRUFBRSxFQUNGLE9BQU8sQ0FDTCxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FDNUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQ2hCLFdBQVcsRUFDWCxrQkFBa0IsRUFBRSxFQUNwQixPQUFPLENBQ0wsZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQzdFLENBQ0YsQ0FBQTtBQUNILENBQUMifQ==