import { createStore, applyMiddleware } from "redux";
import promiseMiddleWare from "redux-promise-middleware"
import reducer from "./ducks/pokemon";


export default createStore(reducer, applyMiddleware(promiseMiddleWare())); 
