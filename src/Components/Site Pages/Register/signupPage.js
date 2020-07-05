import React from 'react'; 

import Footer from '../../Footer/Footer';
import './register.css';

import WhiteBG from './RegisterPage bg.svg';
import RegisterArt from './registerArt.svg';
import { NavLink } from 'react-router-dom';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      newPassword: '',
      repeatPassword: '',
      same: true,
    } 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
  }
  

  handleChange(event) {

    const target = event.target;
    const value = target.name === 'fullName' ? target.value : target.value;
    const name= target.name;
    this.setState({
      [name]: value
    });

  }

  handleSubmit() {
    alert('Signed up Successfully');
    console.log(this.state);
    
    


  }

  checkPasswordMatch(event) {
    if (this.state.repeatPassword !== this.state.newPassword) {
     this.setState({same:  false})
     event.preventDefault();
    } else {
      this.handleSubmit()
    };

   


  
  }


    render() {


        return (
            <div className="regBody" >
              <div className="register">
                <div className="signupSection">
                  <h3><NavLink  className="signInSubHeading" exact to="/signin" >Sign In</NavLink></h3>
                  <h1 className="signUpHeading">Sign Up</h1>
                  <form onSubmit= {this.checkPasswordMatch} action="/" >
                   <label for="fullName" >Full Name*</label>
                   <input name="fullName"
                          id="fullName"
                          type="text"
                          maxLength="100"
                          required
                          value={this.state.fullName} 
                          onChange={this.handleChange} />  
                   <label for="email" >Email*</label>
                   <input 
                          name="email"
                          required
                          id="email" 
                          maxLength="320"
                          type="email" 
                          value={this.state.email} 
                          onChange={this.handleChange} />
                   <label for="password" >New Password*</label>
                   <input 
                          name="newPassword"
                          id="password" 
                          minLength="8"
                          maxLength="1000"
                          type="password" 
                          value={this.state.password} 
                          onChange={this.handleChange}  />  
                   <label for="repeatPassword" >Repeat Password*</label>
                   <input 
                          name="repeatPassword"
                          id="repeatPassword" 
                          type="password" 
                          required
                          value={this.state.repeatPassword} 
                          onChange={this.handleChange}  />  
                  {this.state.same ===false ? <div className="passwordUnmatchAlert" ><li className="alertpointer" ><i class="fas fa-caret-up"></i></li><p><i class="fas fa-exclamation-circle"></i></p><p>Password doesn't match</p></div>  : null }
                   <input id="signupSubmit" type="submit" value="Submit" ></input>  
                  </form>
                  <div className="OAuth" >
                    <p>Sign Up or Login with</p>
                    <div className="loginIcons">
                     <h3><i class="fab fa-google"></i></h3>
                     <h3><i class="fab fa-facebook"></i></h3>
                    </div> 
                  </div>
                  <p className="signupAgreement">By <span className="SnUpAgmtHL" >Signing up</span> I agree the <strong>Privacy Policy</strong> and <strong>Terms and Conditions</strong> of <span className="agreementHL" >Essence</span></p>
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