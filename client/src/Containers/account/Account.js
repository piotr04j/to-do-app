import React,{ Component } from 'react';
import requireAuth from '../requierAuth'

class Account extends Component {

    render(){
        return (
            <p>Your account</p>
        )
    }
}

export default requireAuth(Account);