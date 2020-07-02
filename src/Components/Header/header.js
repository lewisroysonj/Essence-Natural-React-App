import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './header.css';
import logo from './essence logo.svg';

class Header extends React.Component {
  render() {
    return ( <header>
        <nav>
          <ul className="header-logo">
           <NavLink exact activeClassName="HomeCurrentLogo" to="/" ><img src={logo} alt="essence logo" /></NavLink>
          </ul>
          <ul className="nav_links">
            <li><NavLink exact activeClassName="current" to="/" >Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/signup" >SignUp</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/About" >About</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/contact" >Contact</NavLink></li>
          </ul>
          <ul className="header_icons">
            <li><NavLink exact activeClassName="NavIconCurrent" to="/search" ><i class="fas fa-search"></i></NavLink></li>
            <li><NavLink exact activeClassName="NavIconCurrent" to="/cart" ><i  class="fas fa-shopping-cart"></i></NavLink></li>
          </ul>
        </nav>
      </header> )
  }
}


export default Header;
