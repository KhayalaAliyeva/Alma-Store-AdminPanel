import React from 'react';
import { Link } from "react-router-dom";

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
// image
import Logo from "../../images/almastore-logo.svg"

// styles
import "./index.scss"

const Header = ({ signOut }) => {
  return (
    <div className='header'>
        <div className="container">
            <div className="navbar">
                <figure className="logo">
                    <img src={Logo} alt="logo" />
                </figure>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/order">Orders</Link>
                    </li>
                    <li>
                    <Link to="/product">Products</Link>
                    </li>
                    <li>
                    <Link to="/sign-in">Sign In</Link>
                    </li>
                </ul>
                <button className="right" onClick={signOut}>
                
                    Sign Out
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    
                </button>

            </div>
           
        </div>
    </div>
  )
}

export default Header