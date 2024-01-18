 import { createStore, combineReducers} from 'redux';
//import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer";
import thunk from 'redux-thunk';
//import { applyMiddleware } from 'redux';

 //const store = createStore(reducer,applyMiddleware(thunk));
 const store = createStore(reducer);
 export default store;