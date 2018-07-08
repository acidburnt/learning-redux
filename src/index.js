import registerServiceWorker from 'utils/registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/Root';
import fetchTodos from 'api';

import 'normalize.css';

import configureStore from './configureStore';

fetchTodos('all').then((todos) => {
  console.log(todos);
});

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);

registerServiceWorker();
