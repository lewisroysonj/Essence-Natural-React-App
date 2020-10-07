/** @format */

import React, { useEffect, useState } from "react";

import ProductListing from "../../UI Components/productListing";

// import "./CategoryPages.css";
import styles from "./categoryListing.module.scss";

import Footer from "../../Footer/Footer";
import api from "../../../lib/api";
import Axios from "axios";
import { NavLink } from "react-router-dom";

export default function CategoryListing(props) {
  const [products, setProducts] = useState({
    data: null,
    category: null,
    loading: true,
    productLoading: true,
    addedToCart: true,
  });
  const source = Axios.CancelToken.source();

  const getCategoryData = async () => {
    const category = props.match.params.category;
    try {
      const categoryProducts = await api.get(`/products/${category}`);
      console.log("ddf", categoryProducts);
      setProducts({
        ...products,
        data: categoryProducts.data.product[0] && categoryProducts.data.product[0].name ? categoryProducts.data.product : null,
        category: categoryProducts.data.categoryName,
        loading: false,
        productLoading: false,
      });
      console.log(category);
      console.log(categoryProducts);
    } catch (err) {
      if (err.response && err.response.status) {
        window.location.pathname = "/notFound";
      }

      if (Axios.isCancel(err)) {
        console.log("Data Fetch Cancelled :", err);
      } else {
        throw err;
      }
    }
  };

  function setLoadingSpinner(boolean, boolean2) {
    setProducts({
      ...products,
      productLoading: boolean,
      addedToCart: boolean2,
    });
  }

  console.log(products);

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
      {products.addedToCart ? <div className={products.addedToCart === "in" || products.addedToCart === "noAccess" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>{products.addedToCart === "noAccess" || products.addedToCart === "noAccessOut" ? "Please Sign in to Add Products to Cart" : "Product Added to Cart Successfully!"}</div> : null}
      {products.productLoading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      <h1 className={styles.categoryHeading}>
        Essence <span className={styles.categoryHeadingSpan}>{products.category}</span>
      </h1>

      <div className={styles.categoryContainer}>
        {products.loading ? null : products.data ? (
          <ProductListing products={products.data} startSpinner={setLoadingSpinner} />
        ) : (
          <div className={styles.noItems}>
            <h1>No products Available!</h1>
            <h3>Sorry, the products in this category are coming soon!</h3>
            <a href='/all-products'>Explore all products</a>
          </div>
        )}
      </div>

      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </div>
  );
}
