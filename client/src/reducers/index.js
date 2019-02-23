import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import list from './list';

export default combineReducers({
    auth,
    list,
    form: formReducer
});