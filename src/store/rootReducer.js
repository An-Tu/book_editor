import { combineReducers } from 'redux';
import booksList from './books_list';
import sorting from './sorting';

const rootReducer = combineReducers({
  [booksList.stateKey]: booksList.reducer,
  [sorting.stateKey]: sorting.reducer,
});

export default (state, action) => rootReducer(state, action);
