/** @format */

import React, { useEffect, useState } from "react";
import api from "../../../lib/api";

import styles from "./checkout.module.scss";
import statusStyles from "./status.module.scss";
import statusIllustrator from "./checkout Illustration.svg";
import Footer from "../../Footer/Footer";

const SuccessMessage = () => {
  const [success, setSuccess] = useState({
    success: false,
    loading: true,
  });
  async function placeOrder() {
    setSuccess({
      ...success,
      loading: true,
    });
    const paymentData = sessionStorage.getItem("paymentData");
    const session = sessionStorage.getItem("session");
    console.log(paymentData);
    if (paymentData && session) {
      console.log(JSON.parse(paymentData));
      const response = await api.post("/cart/checkout/placeorder", JSON.parse(paymentData));
      setSuccess({
        success: true,
        response: response.data,
        checkoutData: JSON.parse(paymentData),
        loading: false,
      });
      sessionStorage.removeItem("paymentData");
      sessionStorage.removeItem("session");
    } else {
      setSuccess({
        ...success,
        success: false,
        loading: true,
      });
      alert("Session Expired");
      window.location.pathname = "/";
    }
  }
  useEffect(() => {
    placeOrder();
  }, []);
  return (
    <>
      {success.loading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      {success.response && success.success && !success.loading ? (
        <div className={styles.category}>
          <h1 className={styles.categoryHeading}>
            Order<span className={styles.categoryHeadingSpan}> Placed!</span>
          </h1>
          <section className={statusStyles.statusContainer}>
            <div className={statusStyles.statusCard}>
              <img src={statusIllustrator} alt='status art'></img>
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
  const [failure, setFailure] = useState({
    failure: false,
    loading: true,
  });

  async function removeBuyNow() {
    await api.get("/cart/checkout/removebuynow");
  }

  useEffect(() => {
    const session = sessionStorage.getItem("session");
    if (session) {
      removeBuyNow();

      setFailure({
        ...failure,
        loading: false,
        failure: true,
      });
      sessionStorage.removeItem("session");
      sessionStorage.removeItem("paymentData");
    } else {
      alert("Session Expired!");
      window.location.pathname = "/cart";
    }
  }, []);
  return (
    <>
      {failure.loading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      {failure.failure && !failure.loading ? (
        <div className={styles.category}>
          <h1 className={styles.categoryHeading}>
            Order<span className={styles.categoryHeadingSpan}> Failed!</span>
          </h1>
          <section className={statusStyles.statusContainer}>
            <div className={statusStyles.failureMessage}>
              <h2>Sorry! Something went wrong while placing your order</h2>
              <h4>If money was deducted, it will be returned to your account within 4-5 working days</h4>

              <div className={statusStyles.failureLinks}>
                <a href='/checkout'>Try ordering again</a>
                <a href='/all-products'>Explore more Products!</a>
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

export default function Status() {
  const [status, setStatus] = useState({
    error: "null",
  });

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      const query = new URLSearchParams(window.location.search);

      if (query.get("success")) {
        setStatus({
          message: "success",
        });
      }

      if (query.get("canceled")) {
        setStatus({
          message: "canceled",
        });
      }
    }
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      {status.message === "success" ? <SuccessMessage /> : status.message === "canceled" ? <FailureMessage /> : null}
      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </>
  );
}
