import constants from './todo.constants';

export function createTodo(data) {
  return {
    type: constants.TODO_CREATE,
    data
  };
};

export function stopLoad() {
  return {
    type: 'LOADING'
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
  }
}

export function hydrateTodos(data) {
  return {
    type: constants.TODO_HYDRATE,
    data
  };
};

//
// /**
//   * Actions that can be invoked by components in the app in order
//   * to update the TODOS Object
// */
// const TodoActions = {
//   hydrate: function(data) {
//     AppDispatcher.dispatch({
//       type : TodoConstants.TODO_HYDRATE,
//       todos: data
//     });
//   },
//   create : function (data) {
//     AppDispatcher.dispatch({
//       type: TodoConstants.TODO_CREATE,
//       title: data.title,
//       description: data.description
//     });
//   },
//   update : function (data) {
//     AppDispatcher.dispatch({
//       type: TodoConstants.TODO_UPDATE,
//       model: data
//     });
//   },
//   delete : function (id) {
//     AppDispatcher.dispatch({
//       type: TodoConstants.TODO_DELETE,
//       id: id
//     });
//   }
// };
//
// export default TodoActions;
//
//
// const TodoActions = {
//
// }
