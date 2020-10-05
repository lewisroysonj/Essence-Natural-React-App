/** @format */

import React, { useEffect, useState } from "react";
import api from "../../../lib/api";
import Cookies from "js-cookie";

import styles from "./checkout.module.scss";
import statusStyles from "./status.module.scss";
import statusIllustrator from "./checkout Illustration.svg";
import checkIcon from "./checkIcon.svg";
import Footer from "../../Footer/Footer";

const SuccessMessage = () => {
  const [success, setSuccess] = useState({
    success: true,
  });
  async function placeOrder() {
    const paymentData = sessionStorage.getItem("paymentData");
    console.log(paymentData);
    if (paymentData) {
      console.log(JSON.parse(paymentData));
      const response = await api.post("/cart/checkout/placeorder", JSON.parse(paymentData));
      setSuccess({
        success: true,
        response: response.data,
        checkoutData: JSON.parse(paymentData),
      });
      console.log(response);
      sessionStorage.removeItem("paymentData");
    } else {
      setSuccess({
        success: true,
      });
      alert("Session Expired");
      window.location.pathname = "/";
    }
  }
  console.log(success);
  useEffect(() => {
    placeOrder();
  }, []);
  return (
    <>
      {success.response && success.success ? (
        <div className={styles.category}>
          <h1 className={styles.categoryHeading}>
            Order<span className={styles.categoryHeadingSpan}> Placed!</span>
          </h1>
          <section className={statusStyles.statusContainer}>
            <div className={statusStyles.statusCard}>
              <img src={statusIllustrator}></img>
              <div className={statusStyles.divider}></div>
              <div className={statusStyles.statusInfo}>
                <div className={statusStyles.infoSection}>
                  <h2>Order Number</h2>
                  <h4>{success.response.transactionID}</h4>
                </div>
                <div className={statusStyles.infoSection}>
                  <h2>Delivery By</h2>
                  <h4>{success.response.deliveryDate}</h4>
                </div>
                <div className={statusStyles.infoSection}>
                  <h2>Shipping Address</h2>
                  <h4>{success.checkoutData.shippingInfo.address}</h4>
                  <h4>{success.checkoutData.shippingInfo.state}</h4>
                  <h4>{success.checkoutData.shippingInfo.country}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.category}>
          <h1 className={styles.categoryHeading}>
            status<span className={styles.categoryHeadingSpan}> pending</span>
          </h1>
          <section className={statusStyles.statusContainer}></section>
        </div>
      )}
    </>
  );
};

const FailureMessage = () => {
  return <div></div>;
};

export default function Status() {
  const [status, setStatus] = useState({
    error: false,
  });

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      const query = new URLSearchParams(window.location.search);

      if (query.get("success")) {
        setStatus({
          error: false,
        });
      }

      if (query.get("canceled")) {
        setStatus({
          error: true,
        });
      }
    }
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      {!status.error ? <SuccessMessage /> : <FailureMessage />}
      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </>
  );
}
