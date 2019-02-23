import React,{ Component } from 'react';
import requireAuth from '../requierAuth'
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import axios from 'axios';

class Account extends Component {

  
    componentDidMount(){
        const response = {
            token: localStorage.getItem('token'),       
        }
        axios.post('http://localhost:3090/saveList',response).then( data => console.log(data));
        
    }

    onSubmit = () => {
        

        // this.props.list(userId,() => {
        //     console.log(this.props.user)
        // });
       
    }

    render(){

        const { handleSubmit} = this.props;

        return (
            
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>To do:</label>
                    <Field type="text" component="input" name="toDo" autoComplete="off" />
                </fieldset>
                <button>send</button>
            </form>
        )
    }
}


const mapStateToProps = state => {
    return {
        userEmail: state.auth.userEmail,
        user: state.list.user
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         list: (formProps) => dispatch(actions.updateList(formProps))
//     }
// }

export default compose(connect(mapStateToProps), reduxForm({ form: 'list'}))(requireAuth(Account));