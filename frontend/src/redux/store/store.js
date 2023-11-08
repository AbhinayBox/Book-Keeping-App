const {createStore,combineReducers,applyMiddleware}=require('redux');
const thunk=require('redux-thunk');
const {composeWithDevTools}=require('redux-devtools-extension')

const middlewares