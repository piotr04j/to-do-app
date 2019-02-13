import * as type from '../actions/types';

export default (state = { authenticated: '', errorMessage: ''}, action) => {

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



// switch(action.type){
//     case (type.AUTH_USER): 
//         return {
//             ...state,
//         authenticated: action.payload
//         }
//     case (type.AUTH_ERROR): 
//         return {
//             ...state,
//             errorMessage: action.payload
//         }
//     default: return state;
// } 
