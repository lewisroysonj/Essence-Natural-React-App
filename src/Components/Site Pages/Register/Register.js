import React from 'react';
import Footer from '../../Footer/Footer';
import './Register.css';

import WhiteBG from './RegisterPage bg.svg';
import RegisterArt from './registerArt.svg';

export default class Register extends React.Component {
    render() {

      const password = document.getElementById('password');
      const repeatPassword = document.getElementById('repeatPassword'); 
      let checkPassword = (input) => {
        console.log(input.value)
      };

        return (
            <div className="regBody" >
              <div className="register">
                <div className="signupSection">
                  <h3 className="signInSubHeading">Sign In</h3>
                  <h1 className="signUpHeading">Sign Up</h1>
                  <form action="/">
                   <label for="fullName" >Full Name*</label>
                   <input id="fullName" type="text" placeholder="Full Name*" />  
                   <label for="email" >Email*</label>
                   <input id="email" type="email" placeholder="Full Name*" />
                   <label for="password" >New Password*</label>
                   <input id="password" value="ss" type="password" placeholder="New Password*" />  
                   <label for="repeatPassword" >Repeat Password*</label>
                   <input id="repeatPassword" type="password" onInput ={checkPassword(this)} />  
                   <input id="signupSubmit"  type="submit" value="submit" ></input>  
                  </form>
                  <div className="OAuth" >
                    <p>Sign Up or Login with</p>
                    <div className="loginIcons">
                     <h3><i class="fab fa-google"></i></h3>
                     <h3><i class="fab fa-facebook"></i></h3>
                    </div> 
                  </div>
                  <p className="signupAgreement">By Signing up I agree the Privacy Policy and Terms and Conditions of Essence</p>
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