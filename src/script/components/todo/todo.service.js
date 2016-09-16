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
      resolve({
        'todo-1': {
          id         : uniqueId('todo-'),
          title      : 'Some TODO',
          description: 'Click a field to edit'
        }
      });
    }
    return setTimeout(returnData, Math.random() * 2000 + 1000);
  });
}

export { getTodos };
