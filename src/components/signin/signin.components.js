import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton  from '../custom-button/custom-button.component';
import './signin.styles.scss';
import { auth, signInwithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
       try{
           await auth.signInWithEmailAndPassword(email,password);
           console.log("hi");
           this.setState({email:'',password:''});
          

        }
        catch(error){
            console.log(error.message);
        }
    }

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>sign in with you email and password</span>
                <form onSubmit={this.handleSubmit}>
                     <FormInput type="email" value={this.state.email} name="email" label="email" required handleChange={this.handleChange} />
                     <FormInput type="password" value={this.state.password} name="password" label="password" required handleChange={this.handleChange} />  
                     <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>    
                        <CustomButton onClick ={signInwithGoogle} isGoogleSignIn>SignInwithGoogle</CustomButton>
                     </div>
                </form>

            </div>

        )
    }

}

export default SignIn;