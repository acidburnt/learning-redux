import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'reducers/root';

import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
