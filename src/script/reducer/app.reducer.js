import { combineReducers } from 'redux';
import TodoReducer from './todo.reducer';

const AppReducer = combineReducers({
  todos: TodoReducer
});

export default AppReducer;
