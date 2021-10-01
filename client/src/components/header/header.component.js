import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import Cart from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './header.styles';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,hidden,signoutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
    <OptionsContainer>
        <OptionLink to="/shop">
            SHOP
        </OptionLink>
        <OptionLink to="/contact">
            CONTACT
        </OptionLink>      
        { 
           currentUser?
           (<OptionDiv  onClick={signoutStart}>SIGN OUT</OptionDiv>)
           :
           (<OptionLink  to="/signin">SIGN IN</OptionLink>)
        } 

        <CartIcon />
    </OptionsContainer>
    {
        hidden ?
        null
        :
        <Cart />
    }
    </HeaderContainer>

)

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
    
})

const mapDispatchToProps = dispatch => ({
    signoutStart : () => dispatch(signOutStart())
})

export default connect(mapStatetoProps,mapDispatchToProps) (Header);