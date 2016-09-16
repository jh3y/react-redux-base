import {
  createTodo,
  updateTodo,
  hydrateTodos,
  deleteTodo
} from './todo.actions';
import constants from './todo.constants';

const initialState = {
  todos: {},
  loading: true
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {
        loading: false
      });
    case constants.TODO_CREATE:
      const newTodos = {};
      newTodos[action.data.id] = action.data;
      return Object.assign({}, state, {
        todos: newTodos
      });

    case constants.TODO_HYDRATE:
      return Object.assign({}, state, {
        todos: data
      });
    default:
      return state;
  }
}

export default TodoReducer;
