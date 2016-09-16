import AppDispatcher from '../../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import { uniqueId } from 'lodash';

import TodoConstants from './todo.constants';

const CHANGE_EVENT = 'TODO_CHANGE';

let TODOS = {};

/**
  * CRUD functions for app TODOS.
*/
const create = (title = 'Do something', description = 'Do something cool') => {
  const newId = uniqueId('todo-');
  TODOS[newId] = {
    id         : newId,
    title      : title,
    description: description
  };
}
const update = (id, data) => {
  TODOS[id] = Object.assign({}, TODOS[id], data);
}
const destroy = (id) => {
  delete TODOS[id];
}
const hydrate = (data) => {
  TODOS = data;
}

/**
  * Store object
  *
  * Used by components to keep track of app TODOS
*/
const TodoStore = Object.assign({}, EventEmitter.prototype, {
  get: function () {
    return TODOS;
  },
  broadcast: function () {
    this.emit(CHANGE_EVENT);
  },
  onChange: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  offChange: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

/**
  * Register various actions to our dispatcher
  *
  * Each action invokes a specific function on the internal TODOS object.
  * We then invoke the broadcast function of our store to inform listening
  * components of changes.
*/
AppDispatcher.register((action) => {
  switch(action.type) {
    case TodoConstants.TODO_CREATE:
      create(action.title, action.description);
      /**
        * NOTE: We don't need to broadcast this change as we our changing view
        * if we implement quick-create on the home page we will need to do the
        * update
      */
      // TodoStore.broadcast();
      break;

    case TodoConstants.TODO_UPDATE:
      update(action.model.id, action.model);
      TodoStore.broadcast();
      break;

    case TodoConstants.TODO_DELETE:
      destroy(action.id);
      TodoStore.broadcast();
      break;

    case TodoConstants.TODO_HYDRATE:
      hydrate(action.todos);
      TodoStore.broadcast();
      break;

    default:
  }
})


export default TodoStore;
