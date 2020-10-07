/** @format */

import React, { useEffect } from "react";
import api from "../../../lib/api";
import styles from "./notFound.module.scss";
import Footer from "../../Footer/Footer";

export default function NotFound() {
  function throw404Err() {
    try {
      const res = api.get("/404");
    } catch (err) {
      console.error("notFoundError :", err);
    }
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      throw404Err();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <div className={styles.notFound}>
        <h1>404!</h1>
        <h3>The Page you are looking for can't be found!</h3>
        <a href='/'>Return Home</a>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}
