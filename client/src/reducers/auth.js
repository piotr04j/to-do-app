import * as type from '../actions/types';

export default (state = { authenticated: localStorage.getItem('token'), userEmail:'', errorMessage: ''}, action) => {

    if(type.AUTH_USER === action.type){
        return {
            ...state,
            authenticated: action.payload
        }
    }

    if(type.AUTH_ERROR === action.type){
        return {
            ...state,
            errorMessage: action.payload
        }
    }

    if(type.AUTH_LOGOUT === action.type){
        return {
            ...state,
            authenticated: action.payload,
            userEmail: action.payload
        }
    }
    
    return state;
};



