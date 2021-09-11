import { createStore, combineReducers } from 'redux';
import Reducer from './reducer';

const reducers = combineReducers({
  Reducer,
});

const store = createStore(reducers);
export default store;
