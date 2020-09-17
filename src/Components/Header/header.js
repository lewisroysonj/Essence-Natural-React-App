/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { burgerToggle } from "../../actions";
import SearchPopup from "./SearchPopup";
import "./header.css";
import logo from "./essence logo.svg";
import MobLogo from "./Essence Mob Logo@2x.png";
// import SearchPopup from './SearchPopup';

export default function Header() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     seen: false,
  // //     burgerOpen: false
  //    };
  //   this.togglePopup = this.togglePopup.bind(this);
  // //   this.toggleBurgerPopup = this.toggleBurgerPopup.bind(this);
  //  }

  const [searchPopup, toggleSearhPopup] = useState({
    open: false,
  });

  function disableScroll() {
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;

    window.onscroll = function () {
      window.scrollTo(scrollX, scrollY);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  function togglePopup() {
    toggleSearhPopup({
      open: !searchPopup.open,
    });
    console.log(searchPopup);
  }

  // toggleBurgerPopup() {
  //   this.setState ({
  //     burgerOpen: !this.state.burgerOpen
  //   })
  //  const handleChange = (event) => {
  //     this.setState({value: event.target.value});
  // }

  // const handleSubmit = (event) => {
  // }

  // }

  const burgerNavOpen = useSelector((state) => state.burgerToggle);
  const dispatch = useDispatch();

  return (
    <header>
      <div className='desktopNav'>
        <ul className='header-logo'>
          <NavLink exact activeClassName='HomeCurrentLogo' to='/'>
            <img src={logo} alt='essence logo' />
          </NavLink>
        </ul>

        <ul className='nav_links'>
          <li>
            <NavLink exact activeClassName='current' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='current' to='/signup'>
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='current' to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='current' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='header_icons'>
          <li onClick={togglePopup}>
            <i className='fas fa-search'></i>
          </li>

          <NavLink exact activeClassName='navIconCurrent' to='/cart'>
            <li>
              <i className='fas fa-shopping-cart'></i>
            </li>
          </NavLink>
        </ul>
        {searchPopup.open ? <SearchPopup open={searchPopup.open} toggle={togglePopup} /> : null}
        {searchPopup.open ? disableScroll() : enableScroll()}
      </div>

      <div className='mobileNav'>
        <ul className='burgerButton' onClick={() => dispatch(burgerToggle())} style={burgerToggle === true ? { position: "fixed", color: "#3F3D56" } : null}>
          <div style={burgerNavOpen ? { backgroundColor: "black" } : null}></div>
          <div style={burgerNavOpen ? { backgroundColor: "black" } : null}></div>
          <div style={burgerNavOpen ? { backgroundColor: "black" } : null}></div>
        </ul>

        {burgerNavOpen ? <div className='burgerBG' onClick={() => dispatch(burgerToggle())}></div> : null}

        <ul className='header-logo'>
          <NavLink exact activeClassName='HomeCurrentLogo' to='/'>
            <img src={MobLogo} alt='essence logo' />
          </NavLink>
        </ul>

        <ul className='header_icons'>
          <NavLink exact activeClassName='navIconCurrent' to='/cart'>
            <li>
              <i className='fas fa-shopping-cart'></i>
            </li>
          </NavLink>
        </ul>
        <form className='searchBar' action='/search_results'>
          <input id='fullName' type='text' placeholder='Search' value='' />
          <button className='searchSubmit' type='submit'>
            <i className='fas fa-search'></i>
          </button>
        </form>

        {burgerNavOpen ? disableScroll() : enableScroll()}
        <div className={burgerNavOpen ? "burgerNavOpen" : "burgerNav"}>
          <ul className='mobileNavLinks' onClick={() => dispatch(burgerToggle())}>
            <li>
              <NavLink exact activeClassName='current' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='current' to='/signup'>
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='current' to='/About'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='current' to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
