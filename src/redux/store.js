import { createStore, applyMiddleware } from 'redux';
import { persisteStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persisteStore(store);

export default {store, persistor};
