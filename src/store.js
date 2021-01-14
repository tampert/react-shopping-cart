import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";
import { overLayReducer } from "./reducers/overLayReducer";

const initialState = {};
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
    overLay: overLayReducer,
  }),
  initialState,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
