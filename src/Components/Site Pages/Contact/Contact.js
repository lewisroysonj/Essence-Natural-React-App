/** @format */

import React, { useState } from "react";

import api from "../../../lib/api";

import "./Contact.css";
import Footer from "../../Footer/Footer";

import BG from "./contact imgs/contact bg.svg";
// import contactCurve from "./contact imgs/contactCurve.svg";
import ContactArt from "./contact imgs/contact art.svg";
import MobileBG from "./contact imgs/mobile contact bg.svg";

export default function Contact() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    resMessage: "",
    error: false,
    loading: false,
  });

  function handleChange(e) {
    const target = e.target;
    const value = target.name === "fullName" ? target.value : target.value;
    const name = target.name;
    setContact({
      ...contact,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setContact({
      ...contact,
      loading: true,
    });
    console.log("clicked");
    // alert("Thank you for contacting us, we will get back to you soon!");
    const response = await api.post("/contact", contact);
    setContact({
      ...contact,
      loading: false,
      error: response.data.error,
      resMessage: response.data.message,
    });
  }

  return (
    <div className='contact'>
      <div className='contactBody'>
        <h1>CONTACT US</h1>
        <form onSubmit={handleSubmit} action='/'>
          {!contact.error && contact.resMessage ? (
            <div className='contactSuccess'>
              <h2>Thank you!</h2>
              <h3>{contact.resMessage}</h3>
            </div>
          ) : (
            <>
              {contact.loading ? <h3 className='contactFormHeader'>Loading...</h3> : <h3 className='contactFormHeader'>Drop us a Message</h3>}
              <input name='fullName' required maxLength='100' type='text' value={contact.fullName} onChange={handleChange} placeholder='Full Name*' />
              <input name='email' type='email' onChange={handleChange} required value={contact.email} maxLength='320' placeholder='Email*' />
              <input name='phone' maxLength='20' value={contact.phone} onChange={handleChange} minLength='6' type='tel' placeholder='Phone' />
              <input name='subject' onChange={handleChange} maxLength='100' value={contact.subject} required type='text' placeholder='Subject*' />
              <textarea name='message' required onChange={handleChange} maxLength='500' value={contact.message} type='text' placeholder='Message*' rows='10' />
              <input id='contactSubmit' type='submit' value='Submit'></input>
            </>
          )}
        </form>
        <img className='contactBG' src={BG} alt='bg' />
        <img className='contactArt' src={ContactArt} alt='Contactus' />
        <div className='contactSocialLinks'>
          <h1>Connect with us</h1>
          <ul>
            <li>
              <i class='fab fa-instagram'></i>
            </li>
            <li>
              <i class='fab fa-facebook'></i>
            </li>
            <li>
              <i class='fab fa-linkedin-in'></i>
            </li>
            <li>
              <i class='fab fa-twitter'></i>
            </li>
          </ul>
        </div>
        <div className='contactCompanyAddress'>
          <p>(415)007-7780</p>
          <p>product.natural@essence.com</p>
          <p>5th street Olive cross</p>
          <p>Santiago Chile</p>
        </div>
        <img src={MobileBG} alt='bg' className='contactBGMobile'></img>
      </div>
      <div className='contactFooter'>
        <Footer />
      </div>
    </div>
  );
}
