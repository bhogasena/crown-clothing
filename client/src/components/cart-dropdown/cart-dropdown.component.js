import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
//import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useHistory } from 'react-router-dom';

const Cart = () =>{
    
    const cart_items = useSelector(selectCartItems);
    const history = useHistory();
    const dispatch = useDispatch();


    return(
    <div className='cart-dropdown'>
        {cart_items.length ?
        <div className='cart-items'>
            {cart_items.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))}
        </div>

        :
        <span className='empty-message'>Your Carty Is Empty</span>
        }
        <CustomButton className='button' onClick = {() => 
            {history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = (state) =>({
//     cart_items : selectCartItems(state)
// })
 };

//export default withRouter(connect(mapStateToProps) (Cart));
export default Cart;