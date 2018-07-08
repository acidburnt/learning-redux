import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from 'reducers/todoApp';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const presistedState = loadState();
  const store = createStore(todoApp, presistedState);
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }));
  return store;
};

export default configureStore;
