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
render(React.createElement(Provider, {store: store}, React.createElement("div", null, React.createElement(Router, {history: browserHistory, routes: routes}))), document.getElementById('root'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5kZXYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2Zyb250ZW5kL2VudHJ5L2NvbnNvbGUuZGV2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVc7T0FDM0IsS0FBSyxNQUFNLE9BQU87T0FDbEIsRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjO09BQ3RDLE1BQU0sTUFBTSxnQkFBZ0I7T0FDNUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhO09BQy9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sY0FBYztPQUM5QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CO09BQ2xELGNBQWMsTUFBTSxzQkFBc0I7QUFFakQsTUFBTSxLQUFLLEdBQUcsY0FBYyxFQUFFLENBQUE7QUFDOUIsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBRTNELE1BQU0sQ0FDSixvQkFBQyxRQUFRLEdBQUMsS0FBSyxFQUFFLEtBQWEsR0FDNUIscUJBQUMsR0FBRyxTQUNGLG9CQUFDLE1BQU0sR0FBQyxPQUFPLEVBQUUsY0FBZSxFQUFDLE1BQU0sRUFBRSxNQUFjLEVBQUcsQ0FDdEQsQ0FDRyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQ2hDLENBQUEifQ==