import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Create from './components/create/create';
import * as TodoActions from 'actions/todo.actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (model) => {
      dispatch(TodoActions.createTodo(model));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
