import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from 'reducers/todoApp';

import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

import { loadState, saveState } from './localStorage';

const presistedState = loadState();

const store = createStore(todoApp, presistedState);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
