import { render } from 'react-dom';
import React from 'react';
import { browserHistory, Router } from 'react-router';
import routes from 'routes/App';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(React.createElement(Provider, {store: store}, React.createElement("div", null, React.createElement(Router, {history: history, routes: routes.props.children}))), document.getElementById('root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmRldi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvcmUvZnJvbnRlbmQvZW50cnkvYXBwLmRldi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXO09BQzNCLEtBQUssTUFBTSxPQUFPO09BQ2xCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWM7T0FDOUMsTUFBTSxNQUFNLFlBQVk7T0FDeEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhO09BQy9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0I7T0FDbEQsY0FBYyxNQUFNLHNCQUFzQjtBQUVqRCxNQUFNLEtBQUssR0FBRyxjQUFjLEVBQUUsQ0FBQTtBQUM5QixNQUFNLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFRLENBQUE7QUFFbEUsTUFBTSxDQUNKLG9CQUFDLFFBQVEsR0FBQyxLQUFLLEVBQUUsS0FBYSxHQUM1QixxQkFBQyxHQUFHLFNBQ0Ysb0JBQUMsTUFBTSxHQUFDLE9BQU8sRUFBRSxPQUFRLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUyxFQUFHLENBQ3ZELENBQ0csRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNoQyxDQUFBIn0=