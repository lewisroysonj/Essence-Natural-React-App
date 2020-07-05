import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './header.css';
import logo from './essence logo.svg';
import SearchPopup from './SearchPopup';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    };
    this.togglePopup = this.togglePopup.bind(this); 
  }

  togglePopup() {
    this.setState  ({
      seen: !this.state.seen
    })

  }

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
            <li onClick={this.togglePopup}><i class="fas fa-search"></i></li>
            <NavLink exact activeClassName="navIconCurrent" to="/cart" ><li><i  class="fas fa-shopping-cart"></i></li></NavLink>
          </ul>
          {this.state.seen ? <SearchPopup toggle={this.togglePopup} /> : null }
        </nav>
      </header> )
  }
}


export default Header;
