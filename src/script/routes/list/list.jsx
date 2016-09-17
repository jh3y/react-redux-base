/**
  * In redux, each top level view component for a route acts as a container
  * in order to pass down data etc. to it's presentation pieces.
*/
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import List from './components/list/list';
import * as TodoActions from 'actions/todo.actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (todoId) => {
      dispatch(TodoActions.deleteTodo(todoId));
    },
    onUpdate: (oldModel, newModel) => {
      dispatch(TodoActions.updateTodo(newModel));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
