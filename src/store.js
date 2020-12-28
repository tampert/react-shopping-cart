import  {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/productReducers'

const initialState = {};
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    initialState,
    composerEnhancer(applyMiddleware(thunk))
);

export default store;