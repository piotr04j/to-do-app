import axios from 'axios';
import * as type from './types';

export const signup = (formProps, callback) => async dispatch => {

    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);

        dispatch({
            type: type.AUTH_USER,
            payload: response
        });

        callback();

    } catch(e) {
        
        dispatch({
            type: type.AUTH_ERROR,
            payload: 'Email in use'
        })
    }

};
