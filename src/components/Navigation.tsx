import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props: { loggedIn: boolean, setLoggedIn: (loggedIn: boolean) => void }) => {

    const logout = () => {
        window.name = '';
        props.setLoggedIn(false);
    }

    let navBar;

    if (props.loggedIn) {
        navBar = (
            <nav className="navbar">
                <p className="logo" >SecretPeople</p>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link" aria-current="page" onClick={logout}><span className="text">Logout</span></Link>
                    </li>
                </ul>
            </nav>
        )
    }
    else {
        navBar = (
            <nav className="navbar">
                <p className="logo" >SecretPeople</p>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link" aria-current="page"><span className="text">Login</span></Link>
                    </li>
                    <li>
                        <Link to="/register" className="nav-link" aria-current="page">Register</Link>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <div>
            {navBar}
        </div>
    );
};

export default Navigation;