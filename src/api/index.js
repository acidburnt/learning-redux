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

export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.5) throw new Error('Boom!');

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

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDAtabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDAtabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
