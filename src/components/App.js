import React from 'react';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import Footer from 'components/Footer';
import { hot } from 'react-hot-loader';


function App({ match: { params } }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'all'} />
      <Footer />
    </div>
  );
}

export { App as AppUnwrapped };
export default hot(module)(App);
