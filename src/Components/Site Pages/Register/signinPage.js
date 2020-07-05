import React from 'react';  
import Footer from '../../Footer/Footer';


import './register.css';

import WhiteBG from './RegisterPage bg.svg';
import RegisterArt from './registerArt.svg';
import { NavLink } from 'react-router-dom';

export default class SignUp extends React.Component {

    render() {


        return (
            <div className="regBody" >
              <div className="register">
                <div className="signupSection">
                  <h3><NavLink  className="signInSubHeading" exact to="/signup" >Sign Up</NavLink></h3>
                  <h1 className="signUpHeading">Sign In</h1>
                  <form action="/">
                   <label for="email" >Email*</label>
                   <input id="email" type="email"  />
                   <label for="password" >Password*</label>
                   <input id="password" type="password"  />  
                   <input id="signupSubmit"  type="submit" value="Submit" ></input>  
                  </form>
                  <div className="OAuth" >
                    <p>Sign Up or Login with</p>
                    <div className="loginIcons">
                     <h3><i class="fab fa-google"></i></h3>
                     <h3><i class="fab fa-facebook"></i></h3>
                    </div> 
                  </div>
                  <p className="signupAgreement">By <span className="SnUpAgmtHL" >Signing in</span> I agree the <strong>Privacy Policy</strong> and <strong>Terms and Conditions</strong> of <span className="agreementHL" >Essence</span></p>
                  <div className="signupBG"></div>

                </div>
                <img src={RegisterArt} className="registerArt" alt="art" />
                <img src={WhiteBG} className="registerBG" alt="bg" />
                
              </div>
              <Footer /> 
            </div>
        )
    }
}