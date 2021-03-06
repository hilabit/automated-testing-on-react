import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [reduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleWare(rootReducer);
