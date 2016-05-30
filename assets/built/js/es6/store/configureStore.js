import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';
import api from 'middleware/api';
import modifyResponse from 'middleware/modifyResponse';
import handleInitialState from 'utils/handleInitialState';
export default function configureStore() {
    return createStore(rootReducer, handleInitialState(), applyMiddleware(thunk, api, modifyResponse));
}
