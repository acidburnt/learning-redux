import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1>REDUXXXXX</h1>
    </div>
  );
}

export { App as AppUnwrapped };
export default hot(module)(App);
