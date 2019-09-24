import {
  createStore as reduxCreateStore,
  compose,
  combineReducers
} from 'redux';
import reducers from '../reducers';

const initialState = {};
/* eslint-disable no-underscore-dangle */
const enhancers = compose(
  typeof window === 'object'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x
);
/* eslint-enable */

const createStore = () =>
  reduxCreateStore(combineReducers(reducers), initialState, enhancers);

export default createStore;
