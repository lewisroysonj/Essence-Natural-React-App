/** @format */

import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

import api from "../../../lib/api";

import Footer from "../../Footer/Footer";
import "./register.css";
import alertStyles from "../../UI Components/NewsletterForm.module.scss";

import WhiteBG from "./RegisterPage bg.svg";
import RegisterArt from "./registerArt.svg";
import MobileBG from "./mobile page bg.svg";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    newPassword: "",
    repeatPassword: "",
    error: false,
    message: null,
    loading: false,
  });

  console.log(newUser);

  function handleChange(e) {
    const target = e.target;
    const value = target.name === "fullName" ? target.value : target.value;
    const name = target.name;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  }

  async function handleSubmit() {
    setNewUser({
      ...newUser,
      loading: true,
      error: false,
      message: null,
    });

    const postUser = await api.post("/auth/register", { ...newUser });

    setNewUser({
      ...newUser,
      resError: postUser.data.error,
      resMessage: postUser.data.message,
      resUserEmail: postUser.data.userEmail,
      loading: false,
      error: false,
      message: null,
    });
  }

  function validateForm(e) {
    e.preventDefault();
    if (newUser.repeatPassword === newUser.newPassword) {
      handleSubmit();
    } else {
      setNewUser({ ...newUser, error: true, message: "Passwords Don't Match!" });
    }
  }

  const { fullName, email, newPassword, repeatPassword } = newUser;

  return (
    <div className='regBody'>
      <div className='register'>
        <div className='signupSection'>
          <h3>
            <NavLink className='signInSubHeading' exact to='/signin'>
              Sign In
            </NavLink>
          </h3>
          <h1 className='signUpHeading'>Sign Up</h1>
          <form onSubmit={validateForm} action='/'>
            {newUser.resError ? <h3 className={alertStyles.errorMessage}>{newUser.resMessage}</h3> : <h3 className={alertStyles.successMessage}>{newUser.resMessage}</h3>}
            {newUser.loading ? <div className='loadingSpinner'>Loading...</div> : null}
            <label htmlFor='fullName'>Full Name*</label>
            <input name='fullName' autoComplete='name' id='fullName' type='text' maxLength='100' required value={fullName} onChange={handleChange} />
            <label htmlFor='email'>Email*</label>
            <input name='email' autoComplete='email' required id='email' maxLength='320' type='email' value={email} onChange={handleChange} />
            <label htmlFor='newPassword'>New Password*</label>
            <input name='newPassword' id='newPassword' autoComplete='new-password' minLength='8' maxLength='1000' type='password' value={newPassword} onChange={handleChange} />
            <label htmlFor='repeatPassword'>Repeat Password*</label>
            <input name='repeatPassword' id='repeatPassword' autoComplete='new-password' type='password' required value={repeatPassword} onChange={handleChange} />
            {newUser.error ? (
              <div className='passwordUnmatchAlert'>
                <li className='alertpointer'>
                  <i class='fas fa-caret-up'></i>
                </li>
                <p>
                  <i class='fas fa-exclamation-circle'></i>
                </p>
                <p>{newUser.message}</p>
              </div>
            ) : null}

            {newUser.resUserEmail ? (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { user: newUser.resUserEmail, message: newUser.resMessage },
                }}
              />
            ) : null}

            <button id='signupSubmit' type='submit'>
              Sign Up
            </button>
          </form>
          <div className='OAuth'>
            <p>Sign Up or Login with</p>
            <div className='loginIcons'>
              <h3>
                <i className='fab fa-google'></i>
              </h3>
              <h3>
                <i className='fab fa-facebook'></i>
              </h3>
            </div>
          </div>
          <p className='signupAgreement'>
            By <span className='SnUpAgmtHL'>Signing up</span> I agree the <strong>Privacy Policy</strong> and <strong>Terms and Conditions</strong> of <span className='agreementHL'>Essence</span>
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
