import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router'
// Reducers
import tasks from './tasks';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  tasks,
  router: connectRouter(history)
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
