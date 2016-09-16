import { combineReducers } from 'redux';
import TodoReducer from '../components/todo/todo.reducer';

const AppReducer = combineReducers({
  todos: TodoReducer
});

export default AppReducer;
