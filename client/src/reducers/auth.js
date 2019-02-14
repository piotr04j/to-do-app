import * as type from '../actions/types';

export default (state = { authenticated: localStorage.getItem('token'), errorMessage: ''}, action) => {

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
    
    return state;
};



