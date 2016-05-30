import { render } from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import configureStore from 'store/configureStore';
import routes from 'routes/app';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(React.createElement(Provider, {store: store}, React.createElement(Router, {history: history, routes: routes.props.children})), document.getElementById('root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9mcm9udGVuZC9lbnRyeS9hcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVztPQUMzQixLQUFLLE1BQU0sT0FBTztPQUNsQixFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWM7T0FDdEMsY0FBYyxNQUFNLHNCQUFzQjtPQUMxQyxNQUFNLE1BQU0sWUFBWTtPQUN4QixFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWE7T0FDL0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjO09BQzlCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0I7QUFFekQsTUFBTSxLQUFLLEdBQUcsY0FBYyxFQUFFLENBQUE7QUFDOUIsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBUSxDQUFBO0FBRWxFLE1BQU0sQ0FDSixvQkFBQyxRQUFRLEdBQUMsS0FBSyxFQUFFLEtBQWEsR0FDNUIsb0JBQUMsTUFBTSxHQUFDLE9BQU8sRUFBRSxPQUFRLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUyxFQUFHLENBQ2xELEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQSJ9