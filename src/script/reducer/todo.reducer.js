import {
  createTodo,
  updateTodo,
  hydrateTodos,
  deleteTodo
} from 'actions/todo.actions';
import constants from 'constants/todo.constants';

const initialState = {
  todos   : {},
  hydrated: false
};

const TodoReducer = (state = initialState, action) => {
  let todos;
  switch (action.type) {
    case constants.TODO_CREATE:
      todos = Object.assign({}, state.todos, {
        [action.data.id]: action.data
      });
      return Object.assign({}, state, {
        todos: todos
      });

    case constants.TODO_UPDATE:
      todos = {};
      for (let todo in state.todos) {
        if (action.data.id === todo) {
          todos[action.data.id] = action.data;
        } else {
          todos[todo] = state.todos[todo];
        }
      }
      return Object.assign({}, state, {
        todos: todos
      });

    case constants.TODO_DELETE:
      todos = {};
      for (let todo in state.todos) {
        if (!todos[todo] && action.id !== todo) {
          todos[todo] = state.todos[todo];
        }
      }
      const newState = {
        todos: todos,
        /**
          * NOTE: We have to tell the state that we are still hydrated
          * else we will go into a never ending loading state
        */
        hydrated: true
      };
      return newState;

    case constants.TODO_HYDRATE:
      return Object.assign({}, state, {
        todos   : action.data,
        hydrated: true
      });

    default:
      return state;
  }
}

export default TodoReducer;
