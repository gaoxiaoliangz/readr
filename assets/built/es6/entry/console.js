import { render } from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import routes from 'routes/Console';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(React.createElement(Provider, {store: store}, React.createElement(Router, {history: history, routes: routes})), document.getElementById('root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvZW50cnkvY29uc29sZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXO09BQzNCLEtBQUssTUFBTSxPQUFPO09BQ2xCLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYztPQUN0QyxNQUFNLE1BQU0sZ0JBQWdCO09BQzVCLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYTtPQUMvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWM7T0FDOUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQjtPQUNsRCxjQUFjLE1BQU0sc0JBQXNCO0FBRWpELE1BQU0sS0FBSyxHQUFHLGNBQWMsRUFBRSxDQUFBO0FBQzlCLE1BQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDLGNBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFFbEUsTUFBTSxDQUNKLG9CQUFDLFFBQVEsR0FBQyxLQUFLLEVBQUUsS0FBYSxHQUM1QixvQkFBQyxNQUFNLEdBQUMsT0FBTyxFQUFFLE9BQWUsRUFBQyxNQUFNLEVBQUUsTUFBYyxFQUFHLENBQ2pELEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQSJ9