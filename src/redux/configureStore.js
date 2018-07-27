/**
 * Listingslab
 *
 * @package     react-tech-test
 * @author      Chris Dorward <listingslab@gmail.com>
 * @repo        https://github.com/listingslab/react-tech-test
 *
 */

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialState from './initialState';
import packageJSON from '../../package.json';

const config = {
  key: packageJSON.name,
  storage,
};

const reducer = persistReducer(config, reducers);

export function configureStore () {
  return createStore (
    reducer,
    initialState,
    composeWithDevTools (applyMiddleware(thunk)),
  )
};