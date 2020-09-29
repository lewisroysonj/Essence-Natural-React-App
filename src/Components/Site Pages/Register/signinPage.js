/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

import "./register.css";
import Footer from "../../Footer/Footer";

import WhiteBG from "./RegisterPage bg.svg";
import RegisterArt from "./registerArt.svg";
import MobileBG from "./mobile page bg.svg";
import api from "../../../lib/api";
import { loadUserFromCookies } from "../../../lib/user";

export default function SignIn(props) {
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    loading: false,
    accessToken: "",
    error: false,
    resError: false,
    message: null,
  });

  useEffect(() => {
    let mounted = true;

    if (mounted && props.location.state) {
      setCurrentUser({
        ...currentUser,
        email: props.location.state.user,
        message: props.location.state.message,
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentUser({
      ...currentUser,
      loading: true,
    });
    try {
      const verifiedUser = await api.post("/auth/login", { email: currentUser.email, password: currentUser.password });
      setCurrentUser({
        ...currentUser,
        resError: verifiedUser.data.error,
        message: verifiedUser.data.message,
        accessToken: verifiedUser.data.accessToken,
        loading: false,
      });

      if (verifiedUser.data.accessToken) {
        Cookies.set("token", verifiedUser.data.accessToken, { expires: 7 * 24 * 60 * 60 });
        const token = Cookies.get("token");
        if (token) {
          window.location.pathname = "/";
        }
      }
    } catch (err) {
      console.error("SignIn Err: ", err);
    }
  };

  const { email, password } = currentUser;

  return (
    <div className='regBody'>
      <div className='register'>
        <div className='signupSection'>
          <h3>
            <NavLink className='signInSubHeading' exact to='/signup'>
              Sign Up
            </NavLink>
          </h3>
          <h1 className='signUpHeading'>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {currentUser.error || currentUser.resError ? <div className='formErrorAlert'>{currentUser.message}</div> : <div className='formErrorAlert'>{currentUser.message}</div>}
            {currentUser.loading ? <div className='loadingSpinner'>loading...</div> : null}
            <label htmlFor='email'>Email*</label>
            <input name='email' id='email' type='email' value={email} onChange={handleChange} required />
            <label htmlFor='password'>Password*</label>
            <input name='password' id='password' type='password' value={password} onChange={handleChange} required />
            <input id='signupSubmit' type='submit' value='Submit'></input>
          </form>
          <div className='OAuth'>
            <p>Sign Up or Login with</p>
            <div className='loginIcons'>
              <h3>
                <i class='fab fa-google'></i>
              </h3>
              <h3>
                <i class='fab fa-facebook'></i>
              </h3>
            </div>
          </div>
          <p className='signupAgreement'>
            By <span className='SnUpAgmtHL'>Signing in</span> I agree the <strong>Privacy Policy</strong> and <strong>Terms and Conditions</strong> of <span className='agreementHL'>Essence</span>
          </p>
          <div className='signupBG'></div>
        </div>
        <img className='registerBGMobile' src={MobileBG} alt='bg' />

        <img src={RegisterArt} className='registerArt' alt='art' />
        <img src={WhiteBG} className='registerBG' alt='bg' />
      </div>
      <div className='registerFooter'>
        <Footer />
      </div>
    </div>
  );
}
