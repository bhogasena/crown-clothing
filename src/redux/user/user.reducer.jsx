import { UserActionTypes } from "./user.types";

const INITIAL_STATE={
    currentUser: null
}

const userReducer = (state1 = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:

        return {
            
            ...state1,
            currentUser: action.payload,   
        }

        default:
            return state1;
    }
}

export default userReducer;