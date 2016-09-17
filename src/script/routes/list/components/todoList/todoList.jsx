import React, { PropTypes } from 'react';

import Todo from '../todo/todo';

const TodoList = (props) => {
  const { todos, onDelete, onUpdate } = props;
  return (
    <div className='todos'>
      <h2 className='todos__title'>
        Your todos
      </h2>
      { Object.keys(todos).map(function (todoId, key) {
        const todo = todos[todoId];
        return (
          <Todo
            key={ key }
            id={ todo.id }
            title={ todo.title }
            description={ todo.description }
            onDelete = { onDelete.bind(this, todoId) }
            onUpdate = { onUpdate.bind(this, todo) }
          />
        )
      })}
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default TodoList;
