import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from 'actions/actions';
import { getVisibleTodos } from 'reducers/todoApp';
import TodoList from '../components/TodoList';

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state,
    ownProps.match.params.filter,
  ),
});

// const mapDispatchToProps = dispatch => ({
//   onTodoClick: (id) => {
//     dispatch(toggleTodo(id));
//   },
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo },
)(TodoList));

export default VisibleTodoList;
