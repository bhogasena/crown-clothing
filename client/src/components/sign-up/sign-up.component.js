import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const SignUp = () =>  {
    const [userCredentials, setUserCredentials] =useState({
        displayName:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const {displayName,email,password,confirmpassword} = userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();     
        if(password !== confirmpassword){
            alert('password do not match');
            return;
        }

        try{
            console.log(email);
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            setUserCredentials( {
                displayName:'',
                email:'',
                password:'',
                confirmpassword:''
            });

        }
        catch(error){

        }
    }
    
   const handleChange = event =>{
        const {name, value} = event.target;
        setUserCredentials({...userCredentials,[name] : value});
    }
   
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required>
                    </FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required>
                    </FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required>
                    </FormInput>
                    <FormInput
                        type='password'
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required>
                    </FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )   
}
export default SignUp;