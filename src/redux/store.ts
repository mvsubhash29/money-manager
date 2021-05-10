import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './rootReducer';
import rootSaga from './rootSaga';

// https://redux.js.org/recipes/configuring-your-store
// TODO: Need to check how we can pass preloadedState as an argument to this function while initiating state
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const store = composeWithDevTools(...enhancers)(createStore)(rootReducer);

  sagaMiddleware.run(rootSaga);
  return store;
}
