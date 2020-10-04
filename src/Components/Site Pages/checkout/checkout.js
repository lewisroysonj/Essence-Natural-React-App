/** @format */

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./checkout.module.scss";
import productStyles from "../../UI Components/ProductList.module.scss";
import api from "../../../lib/api";
import Footer from "../../Footer/Footer";
import ProductList from "../../UI Components/productListing";
import listImage from "../CategoryListingPages/Protein bar Image.png";
import RatingsToStars from "../../Util Components/RatingToStars";
import { checkUser } from "../../../lib/user";
const stripePromise = loadStripe("pk_test_51HY93TDKKKjugUT6tDBzGfL9LLcL8MoAg9x0wOVLa6kphoHy9FQsnEviQPZFVgC2SbiBpfhgVkliOmx0h4RR3a2W00GciVOIO3");

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout(props) {
  const [checkout, setCheckout] = useState({
    message: "",
    productLoading: true,
    shippingInfo: {},
  });

  async function loadProducts() {
    try {
      setCheckout({
        ...checkout,
        productLoading: true,
      });

      const getCheckout = await api.get("/cart/checkout");

      setCheckout({
        ...checkout,
        items: getCheckout.data.items,
        summary: getCheckout.data.summary,
        productLoading: false,
      });
    } catch (err) {
      console.error("Get Checkout Error:", err);
      setCheckout({
        ...checkout,
        productLoading: false,
      });
    }
  }

  useEffect(() => {
    let mounted = false;
    const user = checkUser();
    console.log(user);

    if (!mounted) {
      if (user) {
        loadProducts();
        setCheckout({
          ...checkout,
          isUser: true,
        });
      } else {
        setCheckout({
          ...checkout,
          isUser: false,
          productLoading: false,
        });
      }
    }

    return () => {
      mounted = true;
    };
  }, []);
  console.log(checkout);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setCheckout({ ...checkout, message: "Order placed! You will receive an email confirmation." });
    }

    if (query.get("canceled")) {
      setCheckout({ ...checkout, message: "Order canceled -- continue to shop around and checkout when you're ready." });
    }
  }, []);

  const handleClick = async (event) => {
    const { firstName, lastName, phone, address, postalCode, city, state, country } = checkout.shippingInfo;
    console.log(firstName);
    if (firstName && lastName && phone && address && postalCode && city && state && country && checkout.paymentMode) {
      setCheckout({
        ...checkout,
        productLoading: true,
      });
      const stripe = await stripePromise;

      const paymentData = {
        items: checkout.items,
        shippingInfo: checkout.shippingInfo,
        paymentMode: checkout.paymentMode,
      };

      const response = await api.post("/cart/checkout/create-session", paymentData);

      console.log(response);

      const session = await response.data;

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (!result.error) {
        const response = await api.post("/cart/checkout/placeorder", paymentData);
        console.log(response);
      }

      console.log(result);

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    } else {
      alert("Please fill all required(*) fields");
    }
  };

  function changeHandler(e) {
    setCheckout({
      ...checkout,
      shippingInfo: {
        ...checkout.shippingInfo,
        [e.target.name]: e.target.value,
      },
      paymentMode: e.target.name === "payment" ? e.target.value : null,
    });
  }
  console.log(checkout);

  return checkout.message ? (
    <Message message={checkout.message} />
  ) : (
    <>
      {checkout.productLoading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      <div className={styles.category}>
        <h1 className={styles.categoryHeading}>
          Check<span className={styles.categoryHeadingSpan}>out</span>
        </h1>
        <div className={styles.categoryContainer}>
          {checkout.items ? (
            <>
              <section className={styles.shippingDetailsSection}>
                <h3>Shipping Information</h3>
                <form>
                  <div className={styles.dividedInputs}>
                    <span>
                      <label htmlFor='firstName'>First Name*</label>
                      <input name='firstName' onChange={changeHandler} value={checkout.shippingInfo.firstName} type='text' autoComplete='first-name' required></input>
                    </span>

                    <span>
                      <label htmlFor='lastName'>Last Name*</label>
                      <input name='lastName' onChange={changeHandler} value={checkout.shippingInfo.lastName} type='text' autoComplete='family-name' required></input>
                    </span>
                  </div>

                  <span>
                    <label htmlFor='phone'>Phone*</label>
                    <input name='phone' onChange={changeHandler} value={checkout.shippingInfo.phone} type='tel' autoComplete='phone' required></input>
                  </span>

                  <span>
                    <label htmlFor='address'>Address*</label>
                    <input name='address' onChange={changeHandler} value={checkout.shippingInfo.address} type='text' autoComplete='address-line1' required></input>
                  </span>

                  <div className={styles.dividedInputs}>
                    <span>
                      <label htmlFor='address2'>Address 2 (Optional)</label>
                      <input name='address2' onChange={changeHandler} value={checkout.shippingInfo.address2} type='text' autoComplete='address-line2'></input>
                    </span>

                    <span>
                      <label htmlFor='postalCode'>Postal Code*</label>
                      <input name='postalCode' onChange={changeHandler} value={checkout.shippingInfo.postalCode} type='text' autoComplete='postal-code' required></input>
                    </span>
                  </div>
                  <div className={styles.dividedInputs}>
                    <span>
                      <label htmlFor='city'>City*</label>
                      <input name='city' onChange={changeHandler} value={checkout.shippingInfo.city} type='text' autoComplete='address-level2' required></input>
                    </span>

                    <span>
                      <label htmlFor='state'>State*</label>
                      <input name='state' onChange={changeHandler} value={checkout.shippingInfo.state} type='text' autoComplete='address-level1' required></input>
                    </span>

                    <span>
                      <label htmlFor='country'>Country*</label>
                      <input name='country' onChange={changeHandler} value={checkout.shippingInfo.country} type='text' autoComplete='country' required></input>
                    </span>
                  </div>
                </form>
              </section>
              <section className={styles.paymentOptionsSection}>
                <h3>Payment Options</h3>
                <div>
                  <input name='payment' value='card' onChange={changeHandler} type='radio' required></input>
                  <span className={styles.checkmark}></span>
                  <label htmlFor='card'>Credit / Debit Card</label>
                </div>
                <div>
                  <input name='payment' value='netbanking' onChange={changeHandler} type='radio' required></input>
                  <span className={styles.checkmark}></span>
                  <label htmlFor='netbanking'>Netbanking</label>
                </div>
              </section>
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
                    <p>${checkout.summary.items}</p>
                    <p>${checkout.summary.shipping}</p>
                    <p>${checkout.summary.taxes}</p>
                    <h4>${checkout.summary.total}</h4>
                  </div>
                </span>
                <button onClick={handleClick}>Complete Payment</button>
              </section>
              <section className={styles.OrderDetailsSection}>
                <h3>Order Items</h3>
                {checkout.items.map((item) => {
                  return (
                    <div key={item._id} className={styles.productSection}>
                      <a href={`/products/${item._id}`}>
                        <div className={styles.imageContainer}>
                          <img className={styles.productImage} src={item.featuredImage} alt={item.name}></img>
                        </div>
                      </a>
                      <div className={styles.productListDetails}>
                        <a href={`/products/${item._id}`}>
                          <h1 className={styles.heading}>{item.name}</h1>
                        </a>
                        <div className={styles.listPrice}>
                          <span className={styles.listItemPrice}>${item.finalPrice}</span>
                          <span className={styles.listItemMRP}>${item.MRP}</span>
                        </div>
                        <div className={styles.listPrice}>
                          <span className={styles.qty}>Qty: {item.qty}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            </>
          ) : null}
        </div>
        <div className={styles.productListFooter}>
          <Footer />
        </div>
      </div>
    </>
  );
}
