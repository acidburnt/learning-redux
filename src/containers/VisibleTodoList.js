import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from 'actions/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.match.params.filter,
  ),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList));

export default VisibleTodoList;
