import React from 'react';
import logo from './assets/hanish.png';
import { Link } from 'react-router-dom';

const Navbar = ({selected}) => {
    return (
        <nav className="navbar container navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about" style= {{color: '#444'}}>About</Link>
                </li>
                <li className="nav-item">
                   <a href="https://www.cosmotory.xyz/" style={{color: '#444'}} target="_blank" rel="noopener noreferrer" className="nav-link">Blog</a>
               </li>
                <li className="nav-item">
                    <Link to="/tools" style={{color: '#444'}} className="nav-link">Tools I Use</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact" style={{color: '#444'}}>Contact</Link>
                </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
