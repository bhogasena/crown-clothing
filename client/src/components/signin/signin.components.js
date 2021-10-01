import React ,{useState} from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton  from '../custom-button/custom-button.component';
import './signin.styles.scss';
import { auth, signInwithGoogle } from '../../firebase/firebase.utils';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({googleSignInStart, emailSignInStart}) => {
    
    const [userCredentials, setCredentials] =useState({email:'',password:''});
    const {email,password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();            
        emailSignInStart(email,password);
   
    }

    const handleChange = event => {
        const {name,value} = event.target;      
        setCredentials({...userCredentials,[name] : value});
    }

        return (
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>sign in with you email and password</span>
                <form onSubmit={handleSubmit}>
                     <FormInput type="email" value={email} name="email" label="email" required handleChange={handleChange} />
                     <FormInput type="password" value={password} name="password" label="password" required handleChange={handleChange} />  
                     <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>    
                        <CustomButton type="button" onClick ={googleSignInStart} isGoogleSignIn>SignInwithGoogle</CustomButton>
                     </div>
                </form>

            </div>

        )
    

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
}

)
export default connect(null,mapDispatchToProps) (SignIn);