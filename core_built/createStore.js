"use strict";
var configureStore_dev_1 = require('store/configureStore.dev');
function createStore() {
    var store;
    if (typeof window.__INITIAL_STATE__ !== 'undefined') {
        store = configureStore_dev_1.default(window.__INITIAL_STATE__);
    }
    else {
        store = configureStore_dev_1.default();
    }
    return store;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2Zyb250ZW5kL2NyZWF0ZVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBMkIsMEJBRTNCLENBQUMsQ0FGb0Q7QUFFckQ7SUFDRSxJQUFJLEtBQUssQ0FBQTtJQUVULEVBQUUsQ0FBQSxDQUFDLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbkQsS0FBSyxHQUFHLDRCQUFjLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUFBLElBQUksQ0FBQSxDQUFDO1FBQ0osS0FBSyxHQUFHLDRCQUFjLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQTtBQUNkLENBQUM7QUFFRDtrQkFBZSxXQUFXLENBQUEifQ==