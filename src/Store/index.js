import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware,combineReducers,createStore,compose} from 'redux';



let middleware = applyMiddleware(thunk,logger);
let rootReducer = combineReducers({})
let store= createStore(rootReducer,compose(middleware))
export default store

