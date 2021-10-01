import {Route,Switch,Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/home.components'
import ShopPage from './pages/shop/shop.components'
import SigninAndSignUpPage from './pages/signin-and-signup-page/sigin-and-signup-page'
import Header from './components/header/header.component'
import  './App.css'
//import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils'
import React,{useEffect} from 'react'
//import { connect } from 'react-redux'
import { checkUserSession, setCurrentUser } from './redux/user/user.actions'
//import {createStructuredSelector} from 'reselect'
import Checkout from './pages/checkout/checkout.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selectors'


const  App = (/*{checkUserSession,currentUser}*/) =>{

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect( () =>{
    dispatch(checkUserSession())
  },[dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/shop' component={ShopPage} />
        <Route exact path = '/checkout' component={Checkout} />
        <Route  path='/signin' 
        render={ ()=> 
          currentUser ? (
          <Redirect to='/' />
          ):(
            <SigninAndSignUpPage />
          )
          } 
        />
      </Switch>
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser/*,
//   collectionsArray: selectShopDataForPreview*/
// })

// const dispatchToProps = dispatch => ({
//   checkUserSession : () => dispatch(checkUserSession())
// }

// )
// export default connect(mapStateToProps,dispatchToProps) (App);
export default App;
