import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {

    componentDidMount(){
        this.props.signout();
        this.props.history.push('/');
    }

    render() {
        return (
            <button>Sign Out</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(actions.signout())
    }
}

export default connect(null,mapDispatchToProps)(Signout);