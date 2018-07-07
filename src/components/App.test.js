import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from 'reducers/root';
import { createStore } from 'redux';

import { AppUnwrapped as App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
