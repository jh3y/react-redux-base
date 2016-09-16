import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Todo from '../todo/todo';
import TodoActions from '../todo/todo.actions';

/**
  * TodoList component
  *
  * App landing page that displays list of todos
  *
  * Passed a list of todo via props that should be of type Object
  * Stateless again so no need for class extension.
*/
const TodoList = (props) => {
  const renderTodos = () => {
    const todos = props.todos;
    if (!Object.is(todos, {}) && Object.keys(todos).length) {
      return (
        <div className='todos__list'>
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
                onDelete = { this.props.onDelete.bind(this, todo) }
                onUpdate = { this.props.onUpdate.bind(this, todo) }
              />
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          <p>You currently have no todos...</p>
          <p>
            <Link to='/create'>Create one!</Link>
          </p>
        </div>
      )
    }
  };
  return (
    <div className='todos'>
      { renderTodos() }
    </div>
  )
}


/**
  * Set default props for the component and any prop rules
  *
  * NOTE:: As <TodoList/> is being used by react-router, we can't use an
  * ".isRequired" on the "todos" prop.
*/
TodoList.defaultProps = {
  todos: {},
  onDelete: (todo) => console.info(`DELETE ${todo.id}`),
  onUpdate: (todo) => console.info(`UPDATE ${todo.id}`)
};
TodoList.propTypes = {
  todos: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
};

export default TodoList;
