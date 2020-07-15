import React from 'react';
import { NavLink } from 'react-router-dom';
 
import './header.css';
import logo from './essence logo.svg';
import MobLogo from './Essence Mob Logo@2x.png';
import SearchPopup from './SearchPopup';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      burgerOpen: false
    };
    this.togglePopup = this.togglePopup.bind(this); 
    this.toggleBurgerPopup = this.toggleBurgerPopup.bind(this); 
  }

  togglePopup() {
    this.setState  ({
      seen: !this.state.seen
    
    })

  }

  toggleBurgerPopup() {
    this.setState ({
      burgerOpen: !this.state.burgerOpen
    })

  }

  render() {
    return ( <header>
        <div className="desktopNav" >
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
            <li onClick={this.togglePopup}><i className="fas fa-search"></i></li>
            <NavLink exact activeClassName="navIconCurrent" to="/cart" ><li><i  className="fas fa-shopping-cart"></i></li></NavLink>
          </ul>
          {this.state.seen ? <SearchPopup toggle={this.togglePopup} /> : null }
        </div>
  
        <div className="mobileNav" >
         
          
          <ul className="burgerButton"  onClick={this.toggleBurgerPopup} style={this.state.burgerOpen? {position: "fixed", color: "#3F3D56"} : null }>
            <div style={this.state.burgerOpen? { backgroundColor : "black"} : null } ></div>
            <div style={this.state.burgerOpen? { backgroundColor: "black"} : null } ></div>
            <div style={this.state.burgerOpen? { backgroundColor : "black"} : null } ></div>
          </ul>

          {this.state.burgerOpen ? <div className="burgerBG" onClick={this.toggleBurgerPopup} ></div> : null }

          <ul className="header-logo">
           <NavLink exact activeClassName="HomeCurrentLogo" to="/" ><img src={MobLogo} alt="essence logo" /></NavLink>
          </ul>

          <ul className="header_icons">
            <NavLink exact activeClassName="navIconCurrent" to="/cart" ><li><i  className="fas fa-shopping-cart"></i></li></NavLink>
          </ul>
          <form className="searchBar" onSubmit={this.handleSubmit} action="/search_results" >
              <input id="fullName" type="text" placeholder="Search"  value={this.state.value} onChange={this.handleChange} />
              <button className="searchSubmit" type="submit" ><i className="fas fa-search"></i></button>
          </form> 

           
          <div className={this.state.burgerOpen ? "burgerNavOpen" : "burgerNav" } >
            <ul className="mobileNavLinks" onClick={this.toggleBurgerPopup} >
            <li><NavLink exact activeClassName="current" to="/" >Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/signup" >SignUp</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/About" >About</NavLink></li>
            <li><NavLink exact activeClassName="current" to="/contact" >Contact</NavLink></li>
            </ul>
            
          </div>
             
          </div>
      </header> )
  }
}


export default Header;
