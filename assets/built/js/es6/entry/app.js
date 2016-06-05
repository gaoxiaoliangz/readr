import { render } from 'react-dom';
import React from 'react';
import { browserHistory, Router } from 'react-router';
import routes from 'routes/App';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(React.createElement(Provider, {store: store}, React.createElement(Router, {history: history, routes: routes.props.children})), document.getElementById('root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9lbnRyeS9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVztPQUMzQixLQUFLLE1BQU0sT0FBTztPQUNsQixFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjO09BQzlDLE1BQU0sTUFBTSxZQUFZO09BQ3hCLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYTtPQUMvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CO09BQ2xELGNBQWMsTUFBTSxzQkFBc0I7QUFFakQsTUFBTSxLQUFLLEdBQUcsY0FBYyxFQUFFLENBQUE7QUFDOUIsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsY0FBcUIsRUFBRSxLQUFLLENBQVEsQ0FBQTtBQUV6RSxNQUFNLENBQ0osb0JBQUMsUUFBUSxHQUFDLEtBQUssRUFBRSxLQUFhLEdBQzVCLG9CQUFDLE1BQU0sR0FBQyxPQUFPLEVBQUUsT0FBUSxFQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVMsRUFBRyxDQUNsRCxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUEifQ==