import { all, call } from "redux-saga/effects";
import { cartSags } from "./cart/cart-sagas";
import { onFetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga(){
    yield all([
        call(onFetchCollectionStart),
        call(userSagas),
        call(cartSags)
    ])
}