import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/signin/signin.components'
import './signin-and-signup.styles.scss';

const SigninAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
       <SignUp />
    </div>

);

export default SigninAndSignUpPage;