/** @format */

import React, { useEffect, useState } from "react";

import Footer from "../../Footer/Footer";
import FooterOverBG from "./footerOverBG.svg";

import ProductList from "../../UI Components/productListing";

import "./SearchResults.css";
import styles from "./searchResults.module.scss";

export default function SearchResults(props) {
  const [search, setResults] = useState({
    results: null,
    keyword: null,
  });

  useEffect(() => {
    if (props.location.state.search) {
      setResults({
        results: props.location.state.search.results,
        keyword: props.location.state.search.keyword,
      });
    }
  }, [props.location.state]);
  console.log(search);

  return (
    <div className={styles.searchResults}>
      <h1 className={styles.searchResultsHeading}>
        Search <span className={styles.searchResultsHeadingSpan}>Results</span>
      </h1>
      <div className={styles.searchResultsContainer}>
        <div className={styles.searchResultsContent}>
          <p className={styles.searchKeyword}>for "{search.keyword}"</p>
          <div className={styles.listingContainer}>{search.results && search.results.length > 0 ? <ProductList products={search.results} /> : <h3 className={styles.noResultText}>Sorry! Couldn't find any products matching {search.keyword}.</h3>}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
