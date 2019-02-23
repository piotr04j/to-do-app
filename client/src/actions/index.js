import axios from 'axios';
import * as type from './types';

export const signup = (formProps, callback) => async dispatch => {

    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);


        dispatch({
            type: type.AUTH_USER,
            payload: response
        });

        localStorage.setItem('token', response.data.token);

        callback();

    } catch(e) {
        
        dispatch({
            type: type.AUTH_ERROR,
            payload: 'Email in use.'
        })
    }

};


export const signout = () =>  {

    localStorage.removeItem('token');

    return {
        type: type.AUTH_LOGOUT,
        payload: ''
    }

}


export const signin = (formProps,callback) => async dispatch => {

    try {
        const response = await axios.post('http://localhost:3090/signin', formProps);
        
        dispatch({
            type: type.AUTH_USER,
            payload: response
        })

        

        localStorage.setItem('token', response.data.token);
    
        callback();
    } catch (e) {
        dispatch({
            type: type.AUTH_ERROR,
            payload: 'Wrong Email or Password! Try again.'
        })
    }
};

export const createList = (token) => async dispatch => {

    try {
        const response = await axios.post('http://localhost:3090/createList', token);
        

        dispatch({
            type: type.LIST_SAVE,
            payload: response
        })

    
    } catch (e) {
        dispatch({
            type: type.AUTH_ERROR,
            payload: 'problem wiyh lst'
        })
    }
}  