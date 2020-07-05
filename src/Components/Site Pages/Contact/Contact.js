import React from 'react';

import './Contact.css';
import Footer from '../../Footer/Footer';

import BG from './contact imgs/contact bg.svg';
import ContactArt from './contact imgs/contact art.svg';



export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fullName: '',
        email: '',
        phone: '' ,
        subject: '',
        message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
};

handleChange(event) {

  const target = event.target;
  const value = target.name === 'fullName' ? target.value : target.value;
  const name= target.name;
  this.setState({
    [name]: value
  });

}

handleSubmit(event) {
  alert('Thank you for contacting us, we will get back to you soon!');
  console.log(this.state);
  
  


}


    render() {
        return (
            <div className="contact">
                <div className="contactBody">
                  <h1>CONTACT US</h1>
                  <form onSubmit={this.handleSubmit} action="/">
                      <h3>Drop us a Message</h3>
                      <input 
                      name="fullName" 
                      required
                      maxLength="100"
                      type="text" 
                      value={this.state.fullName}
                      onChange={this.handleChange}
                      placeholder="Full Name*" />  
                      <input 
                      name="email" 
                      type="email" 
                      onChange={this.handleChange}
                      required
                      value={this.state.email}
                      maxLength="320"
                      placeholder="Email*" />
                      <input 
                      name="phone"
                      maxLength="20"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      minLength="6" 
                      type="number" 
                      placeholder="Phone" />  
                      <input 
                      name="subject"
                      onChange={this.handleChange}
                      maxLength="100"
                      value={this.state.subject}
                      required 
                      type="text" 
                      placeholder="Subject*" />  
                      <textarea 
                      name="message"
                      required 
                      onChange={this.handleChange}
                      maxLength="500"
                      value={this.state.message}
                      type="text" 
                      placeholder="Message*" 
                      rows="10" />  
                      <input 
                      id="contactSubmit"  
                      type="submit" 
                      value="Submit" ></input>  
                  </form>
                  <img className="contactBG" src={BG}  alt="bg" />
                  <img className="contactArt" src={ContactArt}  alt="Contactus"/>
                  <div className="contactSocialLinks">
                     <h1>Connect with us</h1>
                     <ul>
                       <li><i class="fab fa-instagram"></i></li>
                       <li><i class="fab fa-facebook"></i></li>
                       <li><i class="fab fa-linkedin-in"></i></li>
                       <li><i class="fab fa-twitter"></i></li>
                     </ul>
                  </div>
                  <div className="contactCompanyAddress">
                    <p>(415)007-7780</p>
                   <p>product.natural@essence.com</p>
                    <p>5th street Olive cross</p>
                    <p>Santiago Chile</p>
                  </div>
                  </div>

                  <Footer />
            </div>
        )
    }
}