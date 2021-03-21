import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import menu from '../../images/humIcon.svg';
import './Navbar.css'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">DURANTA<span className="nav__brand">RIDERS</span> </Link>
                <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <span className="menuIcon"><img src={menu} alt="menuIcon"/></span>
                </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/destination/1">Destination</Link>
                    </li>  
                    <li className="nav-item">
                       <Link className="nav-link" to="/">Blog</Link>
                    </li>  
                    <li className="nav-item">
                       <Link className="nav-link" to="/">Contact</Link>
                    </li>  
                    <button className="btn btn-danger btn-sm px-3 login__btn">
                      <Link className="nav-link text-white" to="/login">Login</Link>
                    </button> 
                    <h6 className="pt-2 pl-2 text-info">{loggedInUser.name || loggedInUser.displayName}</h6>
                </ul>     
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;