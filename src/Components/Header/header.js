/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { burgerToggle } from "../../actions";
import SearchPopup from "./SearchPopup";
import "./header.css";
import logo from "./essence logo.svg";
import MobLogo from "./Essence Mob Logo@2x.png";
import { loadUserFromCookies, logOut } from "../../lib/user";

export default function Header() {
  const [searchPopup, toggleSearhPopup] = useState({
    open: false,
  });

  const [user, setUser] = useState({});

  const getUser = async () => {
    const loadedUser = await loadUserFromCookies();
    setUser({
      ...loadedUser,
    });
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getUser();
    }
    return () => {
      mounted = false;
    };
  }, []);

  function disableScroll() {
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset;

    window.onscroll = function () {
      window.scrollTo(scrollX, scrollY);
      console.log(scrollX, scrollY);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  function togglePopup() {
    toggleSearhPopup({
      open: !searchPopup.open,
    });
  }
  console.log(searchPopup);

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
            <NavLink exact activeClassName='current' to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName='current' to='/contact'>
              Contact
            </NavLink>
          </li>
          {user._id ? (
            <li onClick={logOut}>
              <NavLink exact activeClassName='current' to='/signin'>
                Sign Out
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact activeClassName='current' to='/signup'>
                Sign Up
              </NavLink>
            </li>
          )}
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
        {searchPopup.open === true ? disableScroll : enableScroll}
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

        <SearchPopup toggle={togglePopup} device='mobile' />

        {burgerNavOpen ? disableScroll() : enableScroll()}
        <div className={burgerNavOpen ? "burgerNavOpen" : "burgerNav"}>
          <ul className='mobileNavLinks' onClick={() => dispatch(burgerToggle())}>
            <li>
              <NavLink exact activeClassName='current' to='/'>
                Home
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
            {user._id ? (
              <li onClick={logOut}>
                <NavLink exact activeClassName='current' to='/signin'>
                  Sign Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink exact activeClassName='current' to='/signup'>
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
