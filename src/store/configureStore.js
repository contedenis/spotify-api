// @packages
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// @own
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSagas);
  return { store };
}