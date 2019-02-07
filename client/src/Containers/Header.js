import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    state = {
        
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
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/sigin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item nav-link disabled" to="/singout" >Sing Out</Link>
                        </li>
                    </ul>
            
                </div>
            </nav> 
        )
    }
}

export default Header;