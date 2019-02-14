import React,{ Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/account');
        });
    };

    render(){

        const { handleSubmit } =  this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>email</label>
                    <Field name="email" type="email" component="input" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <label>password</label>
                    <Field name="password" type="password" component="input" autoComplete="off" />
                </fieldset>
                <div>
                    { this.props.errorMessage }
                </div>
                <button>Sign up</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

const mapDispatchToProps= dispatch => {
    return {
        signup: (mailProps,callback) => dispatch(actions.signup(mailProps,callback))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),reduxForm({ form: 'signup'}))(Signup);
