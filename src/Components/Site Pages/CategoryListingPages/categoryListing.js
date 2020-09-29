/** @format */

import React, { useEffect, useState } from "react";

import ProductListing from "../../UI Components/productListing";

// import "./CategoryPages.css";
import styles from "./categoryListing.module.scss";

import Footer from "../../Footer/Footer";
import api from "../../../lib/api";
import Axios from "axios";

export default function CategoryListing(props) {
  const [products, setProducts] = useState({
    data: null,
    category: null,
    loading: true,
  });
  const source = Axios.CancelToken.source();

  const getCategoryData = async () => {
    const category = props.match.params.category;
    try {
      const categoryProducts = await api.get(`/products/${category}`);
      console.log("ddf", categoryProducts);
      setProducts({
        data: categoryProducts.data.product[0].name ? categoryProducts.data.product : null,
        category: categoryProducts.data.categoryName,
        loading: false,
      });
      console.log(category);
      console.log(categoryProducts);
    } catch (err) {
      if (err.response.status) {
        window.location.pathname = "/notFound";
      }

      if (Axios.isCancel(err)) {
        console.log("Data Fetch Cancelled :", err);
      } else {
        throw err;
      }
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getCategoryData();
    }

    return () => {
      mounted = false;
      source.cancel("Operation cancelled");
    };
  }, []);

  return (
    <div className={styles.category}>
      <h1 className={styles.categoryHeading}>
        Essence <span className={styles.categoryHeadingSpan}>{products.category}</span>
      </h1>

      <div className={styles.categoryContainer}>
        <div className={styles.categoryContent}>{products.loading ? <h1>Loading...</h1> : products.data ? <ProductListing products={products.data} /> : <h1>No items Available!</h1>}</div>
      </div>

      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </div>
  );
}
