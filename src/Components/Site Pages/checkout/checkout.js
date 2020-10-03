/** @format */

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./checkout.module.scss";
import api from "../../../lib/api";
import Footer from "../../Footer/Footer";

const stripePromise = loadStripe("pk_test_51HY93TDKKKjugUT6tDBzGfL9LLcL8MoAg9x0wOVLa6kphoHy9FQsnEviQPZFVgC2SbiBpfhgVkliOmx0h4RR3a2W00GciVOIO3");

const ProductDisplay = (props) => <section className={styles.ShippingDetails}></section>;

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);
  console.log(props.location.state);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await api.post("/create-session", props.location.state);

    console.log(response);

    const session = await response.data;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <div className={styles.category}>
      {/* {products.addedToCart ? <div className={products.addedToCart === "in" || products.addedToCart === "noAccess" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>{products.addedToCart === "noAccess" || products.addedToCart === "noAccessOut" ? "Please Sign in to Add Products to Cart" : "Product Added to Cart Successfully!"}</div> : null} */}
      {/* {products.productLoading ? ( */}
      {/* <div className='fullScreenLoader'> */}
      {/* <div></div> */}
      {/* </div> */}
      {/* ) : null} */}
      <h1 className={styles.categoryHeading}>
        Check<span className={styles.categoryHeadingSpan}>out</span>
      </h1>

      <div className={styles.categoryContainer}>
        <section className={styles.shippingDetailsSection}>
          <h3>Shipping Information</h3>
          <form>
            <div className={styles.dividedInputs}>
              <span>
                <label>First Name*</label>
                <input></input>
              </span>

              <span>
                <label>Last Name*</label>
                <input></input>
              </span>
            </div>

            <span>
              <label>Phone*</label>
              <input></input>
            </span>

            <span>
              <label>Address*</label>
              <input></input>
            </span>

            <div className={styles.dividedInputs}>
              <span>
                <label>Address 2 (Optional)</label>
                <input></input>
              </span>

              <span>
                <label>Postal Code*</label>
                <input></input>
              </span>
            </div>
            <div className={styles.dividedInputs}>
              <span>
                <label>City*</label>
                <input></input>
              </span>

              <span>
                <label>State*</label>
                <input></input>
              </span>
            </div>
          </form>
        </section>
        <section className={styles.paymentOptionsSection}></section>
        <section className={styles.OrderSummarySection}>
          <h3>Order Summary</h3>
          <span>
            <div>
              <p>Items</p>
              <p>Shipping</p>
              <p>Taxes</p>
              <h4>Total</h4>
            </div>
            <div className={styles.rightSide}>
              <p>$122.00</p>
              <p>$12.00</p>
              <p>$10.00</p>
              <h4>$150.00</h4>
            </div>
          </span>
          <button>Complete Payment</button>
        </section>
        <section className={styles.OrderDetailsSection}></section>
      </div>

      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </div>
  );
}
