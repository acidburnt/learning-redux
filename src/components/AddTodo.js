import React from 'react';
import { addTodo } from '../actions';

function AddTodo({ dispatch }) {
  let input;

  return (
    <div>
      <input ref={(node) => {
        input = node;
      }}
      />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}
      >
        Add todo
      </button>
    </div>
  );
}

export default AddTodo;
