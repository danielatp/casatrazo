import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import articles from './articles';
import user from './user';
import users from './users';
import showModal from './modal'

const mainReducer = combineReducers({
  articles,
  showModal,
  user,
  users,
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger()
))

const store = createStore(mainReducer, middleware)


export default store;

