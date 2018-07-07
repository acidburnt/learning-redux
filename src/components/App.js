import React from 'react';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import Footer from 'components/Footer';
import { hot } from 'react-hot-loader';


function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export { App as AppUnwrapped };
export default hot(module)(App);
