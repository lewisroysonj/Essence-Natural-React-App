/** @format */

import React, { useState } from "react";

import api from "../../lib/api";

import styles from "./NewsletterForm.module.scss";

function NewsletterSignUpForm() {
  const [subscriber, setSubscriber] = useState({
    email: "",
    status: null,
    success: false,
    loading: false,
  });

  function handleChange(e) {
    setSubscriber({
      email: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubscriber({
      ...subscriber,
      loading: true,
    });
    const response = await api.post("/users/subscribe", subscriber);
    setSubscriber({
      ...subscriber,
      status: response.data.status,
      success: response.data.success,
      loading: false,
    });
    console.log(response);
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      {subscriber.success ? (
        <>
          <br></br>
        </>
      ) : null}
      <h1>
        SUBSCRIBE TO OUR <span>NEWSLETTER</span>
      </h1>
      <p>Stay updated with all the latest News & Products from Essence</p>
      {subscriber.loading ? <h3 className='loadingSpinner'>loading...</h3> : null}
      {subscriber.success ? (
        <>
          <h3 className={styles.successMessage}>{subscriber.status}</h3>{" "}
        </>
      ) : null}
      {!subscriber.success && subscriber.status ? <h3 className={styles.errorMessage}>{subscriber.status}</h3> : null}
      {subscriber.success ? null : (
        <>
          <input id='email' name='email' type='email' required onChange={handleChange} placeholder='Enter Your Email' value={subscriber.email}></input>
          <button type='submit'>Submit</button>
        </>
      )}
    </form>
  );
}

export default NewsletterSignUpForm;
