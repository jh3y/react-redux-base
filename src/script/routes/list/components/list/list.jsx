import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import TodoList from '../todoList/todoList';

/**
  * List component
  *
  * App landing page that displays list of todos
  *
  * Passed a list of todo via props that should be of type Object
  * Stateless again so no need for class extension.
*/
const List = (props) => {
  const { todos, onDelete, onUpdate } = props;
  const renderTodos = () => {
    if (!Object.is(todos, {}) && Object.keys(todos).length) {
      return (
        <TodoList
          todos={ todos }
          onDelete={ onDelete }
          onUpdate={ onUpdate }
        />
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
  * NOTE:: As <List/> is being used by react-router, we can't use an
  * ".isRequired" on the "todos" prop.
*/
List.defaultProps = {
  todos: {},
  onDelete: (todo) => console.info(`DELETE ${todo.id}`),
  onUpdate: (todo) => console.info(`UPDATE ${todo.id}`)
};
List.propTypes = {
  todos   : PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

export default List;
