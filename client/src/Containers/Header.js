import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

    renderLinks = () => {

        if(this.props.authenticated){
            return (
                <li className="nav-item">
                    <Link className="nav-item nav-link " to="/signout" >Sing Out</Link>
                </li>
                 
            )
        }  else {
            return (
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-item nav-link" to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                    </li>
                </React.Fragment>
            )
        }

    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
            
                </div>
            </nav> 
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(Header);