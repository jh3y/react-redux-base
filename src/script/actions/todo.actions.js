import { getTodos } from 'service/todo.service';
import constants from 'constants/todo.constants';
import { uniqueId } from 'lodash';

export function createTodo(data, reroot) {
  data.id = uniqueId('todo-');
  return {
    type: constants.TODO_CREATE,
    data
  };
};

export function updateTodo(data) {
  return {
    type: constants.TODO_UPDATE,
    data
  };
};

export function deleteTodo(id) {
  return {
    type: constants.TODO_DELETE,
    id
  };
};

export function hydrateTodos(data) {
  return {
    type: constants.TODO_HYDRATE,
    data
  };
};
