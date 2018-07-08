import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from 'actions/actions';
import { getVisibleTodos } from 'reducers/todoApp';
import TodoList from 'components/TodoList';
import fetchTodos from 'api';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo },
)(VisibleTodoList));

export default VisibleTodoList;
