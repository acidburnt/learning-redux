import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from 'reducers/todoApp';

import 'normalize.css';

import App from 'components/App';
import registerServiceWorker from 'utils/registerServiceWorker';

const presistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false,
  }],
};

const store = createStore(todoApp, presistedState);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
