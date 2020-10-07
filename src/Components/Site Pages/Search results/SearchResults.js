/** @format */

import React, { useEffect, useState } from "react";

import Footer from "../../Footer/Footer";
import ProductListing from "../../UI Components/productListing";

import "./SearchResults.css";
import styles from "./searchResults.module.scss";

export default function SearchResults(props) {
  const [search, setResults] = useState({
    results: null,
    keyword: null,
  });

  const [products, setProducts] = useState({
    addedToCart: "",
    productLoading: true,
  });

  useEffect(() => {
    setProducts({
      ...products,
      productLoading: true,
    });
    if (props.location.state.search) {
      setResults({
        results: props.location.state.search.results,
        keyword: props.location.state.search.keyword,
      });
      setProducts({
        ...products,
        productLoading: false,
      });
    }
  }, [props.location.state]);

  function setLoadingSpinner(boolean, boolean2) {
    setProducts({
      ...products,
      productLoading: boolean,
      addedToCart: boolean2,
    });
  }

  return (
    <div className={styles.searchResults}>
      {products.addedToCart ? <div className={products.addedToCart === "in" || products.addedToCart === "noAccess" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>{products.addedToCart === "noAccess" || products.addedToCart === "noAccessOut" ? "Please Sign in to Add Products to Cart" : "Product Added to Cart Successfully!"}</div> : null}
      {products.productLoading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      <h1 className={styles.searchResultsHeading}>
        Search <span className={styles.searchResultsHeadingSpan}>Results</span>
      </h1>
      <div className={styles.searchResultsContainer}>
        <p className={styles.searchKeyword}>for "{search.keyword}"</p>
        <div className={styles.listingContainer}>{search.results && search.results.length > 0 ? <ProductListing products={search.results} startSpinner={setLoadingSpinner} /> : <h3 className={styles.noResultText}>Sorry! Couldn't find any products matching {search.keyword}.</h3>}</div>
      </div>
      <div className={styles.productListFooter}>
        <Footer />
      </div>
    </div>
  );
}
