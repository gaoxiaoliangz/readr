"use strict";
var redux_1 = require('redux');
var redux_thunk_1 = require('redux-thunk');
var index_1 = require('reducers/index');
var api_1 = require('middleware/api');
var modifyResponse_1 = require('middleware/modifyResponse');
function configureStore(initialState) {
    return redux_1.createStore(index_1.default, initialState, redux_1.applyMiddleware(redux_thunk_1.default, api_1.default, modifyResponse_1.default));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJlU3RvcmUucHJvZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZnJvbnRlbmQvc3RvcmUvY29uZmlndXJlU3RvcmUucHJvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQXNELE9BQ3RELENBQUMsQ0FENEQ7QUFDN0QsNEJBQWtCLGFBQ2xCLENBQUMsQ0FEOEI7QUFDL0Isc0JBQXdCLGdCQUN4QixDQUFDLENBRHVDO0FBQ3hDLG9CQUFnQixnQkFDaEIsQ0FBQyxDQUQrQjtBQUNoQywrQkFBMkIsMkJBRTNCLENBQUMsQ0FGcUQ7QUFFdEQsd0JBQXVDLFlBQVk7SUFDakQsTUFBTSxDQUFDLG1CQUFXLENBQ2hCLGVBQVcsRUFDWCxZQUFZLEVBQ1osdUJBQWUsQ0FBQyxxQkFBSyxFQUFFLGFBQUcsRUFBRSx3QkFBYyxDQUFDLENBQzVDLENBQUE7QUFDSCxDQUFDO0FBTkQ7Z0NBTUMsQ0FBQSJ9