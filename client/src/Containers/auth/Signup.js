import React,{ Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {

    onSubmit = (formProps) => {
        console.log(formProps);
    };

    render(){

        const { handleSubmit } =  this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>email</label>
                    <Field name="email" type="text" component="input" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <label>password</label>
                    <Field name="password" type="password" component="input" autoComplete="off" />
                </fieldset>
                <button>Sign up</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'signup'})(Signup);
