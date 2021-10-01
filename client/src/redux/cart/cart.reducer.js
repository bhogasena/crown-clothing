import { CartActionTypes } from "./cart.types"
import { addItemsToCart,removeItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cart_items:[]
}
const CartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cart_items: addItemsToCart(state.cart_items,action.payload)
            }
        case CartActionTypes.SUBTRACT_ITEM:
            return{
                ...state,
                cart_items: removeItemFromCart(state.cart_items,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart_items: state.cart_items.filter (item => item.id !== action.payload.id)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cart_items:[]
            }
        default: 
            return state            
    }

}

export default CartReducer;