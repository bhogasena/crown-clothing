import {Route,Switch,Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/home.components'
import ShopPage from './pages/shop/shop.components'
import SigninAndSignUpPage from './pages/signin-and-signup-page/sigin-and-signup-page'
import Header from './components/header/header.component'
import  './App.css'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class  App extends React.Component{


  unsubscriveFromAuth = null;

  componentDidMount(){

    const {setCurrentUser1} = this.props;
    let userRef=null;
    this.unsubscriveFromAuth = auth.onAuthStateChanged(async userAuth => {   
      console.log("before if");
      if(userAuth){   
        console.log("inside if"); 
         userRef =  await createUserProfileDocument(userAuth);  
            
        console.log("after wait"); 
        userRef.onSnapshot(snapshot =>{    
          console.log("after db");     
          setCurrentUser1({            
              id: snapshot.id,
              ...snapshot.data()            
          });
        });
        
      }    
      
      console.log(userRef);     
      setCurrentUser1(userAuth);
      
    })
  }

  componentWillUnmount(){
    this.unsubscriveFromAuth();
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' 
        render={ ()=> 
          this.props.currentUser ? (
          <Redirect to='/' />
          ):(
            <SigninAndSignUpPage />
          )
          } 
        />
      </Switch>
    </div>
  );
}}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

/*const dispatchToProps = dispatch1 => ({
  setCurrentUser1 : user => dispatch1(setCurrentUser(user))
}

)*/
export default connect(mapStateToProps,{setCurrentUser1: setCurrentUser }) (App);
