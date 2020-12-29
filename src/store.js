import  {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'

const initialState = {};
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
    }),
    initialState,
    composerEnhancer(applyMiddleware(thunk))
);

export default store;