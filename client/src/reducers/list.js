import * as type from '../actions/types';

export default (state = {toDo: [], progress: [], done: []}, action) => {

    if(type.AUTH_LIST === action.type){
        return{
            ...state,
            user: action.payload
        }
    }
    return state
}