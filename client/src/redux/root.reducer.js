import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";

const persistsConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistsConfig,rootReducer);