import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoApp from 'reducers';
import { createStore } from 'redux';

import { AppUnwrapped as App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStore(todoApp)}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
