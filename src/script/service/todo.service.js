/**
  * import specific function from lodash for generating todo Ids
*/
import { uniqueId } from 'lodash';

/**
  * basic dummy service that uses a randomly timed promise to return some data
*/
const getTodos = function() {
  return new Promise(function(resolve, reject) {
    const returnData = function() {
      const todoResponse = {};
      const todoId = uniqueId('todo-');
      todoResponse[todoId] = {
        id: todoId,
        title: 'Some TODO',
        description: 'Click a field to edit'
      };
      resolve(todoResponse);
    }
    return setTimeout(returnData, Math.random() * 2000 + 1000);
  });
}

export { getTodos };
