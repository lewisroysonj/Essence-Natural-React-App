import React from 'react';

import './Contact.css';
import Footer from '../../Footer/Footer';

import BG from './contact imgs/contact bg.svg';
import ContactArt from './contact imgs/contact art.svg';



export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="contactBody">
                  <h1>CONTACT US</h1>
                  <form action="/">
                      <h3>Drop us a Message</h3>
                      <input id="fullName" type="text" placeholder="Full Name*" />  
                      <input id="email" type="email" placeholder="Email*" />
                      <input id="phone" type="number" placeholder="Phone" />  
                      <input id="subject" type="text" placeholder="Subject*" />  
                      <textarea id="message" type="text" placeholder="Message*" rows="10" />  
                      <input id="contactSubmit"  type="submit" value="Submit" ></input>  
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