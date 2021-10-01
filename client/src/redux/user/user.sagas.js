import { UserActionTypes } from "./user.types";
import {takeLatest, put,all, call} from 'redux-saga/effects'
import { auth, googleprovider, createUserProfileDocument ,getCurrentUser } from "../../firebase/firebase.utils";
import {  SignInFailure, SignInSuccess, signOutFailure, signOutSuccess } from "./user.actions";

export function* getUserSnapshot(user){
    try{      
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        console.log(userSnapshot);
        yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(SignInFailure(error.message))
    }

}
export function* signInwithGoogle(){

    try{
        const {user} = yield auth.signInWithPopup(googleprovider);
        yield getUserSnapshot(user);
     
    }catch(error){
        yield put(SignInFailure(error.message))
    }
}


export function* signInwithEmailPassword({payload:{email,password}}){
        try{
           const {user} = yield auth.signInWithEmailAndPassword(email,password);
           yield getUserSnapshot(user);

        }
        catch(error){
            yield put(SignInFailure(error));
        }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
           yield getUserSnapshot(userAuth);         

    }catch(error){
        yield put(SignInFailure(error));

    }

}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))

    }
}
export function* onEmailSignInSTart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInwithEmailPassword)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInwithGoogle);
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}
export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInSTart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])
}