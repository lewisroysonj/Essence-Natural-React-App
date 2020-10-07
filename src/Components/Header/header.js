/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { burgerToggle } from "../../actions";
import SearchPopup from "./SearchPopup";
import { loadUserFromCookies, logOut } from "../../lib/user";
import { enableScroll, disableScroll } from "../../lib/scroll";

import "./header.css";

import logo from "./essence logo.svg";
import MobLogo from "./Essence Mob Logo@2x.png";
import cartIcon from "./Shopping cart.svg";
import cartIconLight from "./Shopping cart light.svg";
import searchIcon from "./Search Icon.svg";

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

  function togglePopup() {
    toggleSearhPopup({
      open: !searchPopup.open,
    });
  }
  const burgerNavOpen = useSelector((state) => state.burgerToggle);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchPopup.open) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [searchPopup]);

  return (
    <header>
      <div className='desktopNav'>
        <ul className='header-logo'>
          <NavLink activeClassName='HomeCurrentLogo' to='/'>
            <img src={logo} alt='essence logo' />
          </NavLink>
        </ul>

        <ul className='nav_links'>
          <li>
            <NavLink activeClassName='current' to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName='current' to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='current' to='/contact'>
              Contact
            </NavLink>
          </li>
          {user._id ? (
            <li onClick={logOut}>
              <NavLink activeClassName='current' to='/signin'>
                Sign Out
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink activeClassName='current' to='/signup'>
                Sign Up
              </NavLink>
            </li>
          )}
        </ul>
        <ul className='header_icons'>
          <li onClick={togglePopup}>
            <img src={searchIcon} alt='search icon'></img>
          </li>

          <NavLink activeClassName='navIconCurrent' to='/cart'>
            <li>
              <img src={cartIcon} alt='cart Icon'></img>
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
          <li>
            <NavLink exact activeClassName='navIconCurrent' to='/cart'>
              <img src={cartIconLight} alt='cart Icon'></img>
            </NavLink>
          </li>
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
