import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signin extends Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/account');
        });

    };


    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>email</label>
                    <Field name="email" component="input" type="email" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <label>password</label>
                    <Field name="password" component="input" type="password" autoComplete="off" />
                </fieldset>
                <button>Sign In</button>
                <div>{this.props.errorMessage}</div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signin: (formProps,callback) => dispatch(actions.signin(formProps,callback)),
        createList: (token,callback) => dispatch(actions.signin(token))
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps),reduxForm({form: 'signin'}))(Signin);