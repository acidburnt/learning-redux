import { v4 } from 'node-uuid';

const fakeDAtabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let\'s go',
    completed: false,
  }],
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchTodos = filter =>
  delay(5000).then(() => {
    switch (filter) {
      case 'all':
        return fakeDAtabase.todos;
      case 'active':
        return fakeDAtabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDAtabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export default fetchTodos;
