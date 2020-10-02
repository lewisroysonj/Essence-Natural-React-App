/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import api from "../../../lib/api";

import Footer from "../../Footer/Footer";

import "./ProductDetail.css";
import styles from "./ProductDetails.module.scss";
import ProductListing from "../../UI Components/productListing";
import RatingsToStars from "../../Util Components/RatingToStars";

export default function ProductDetail(props) {
  const [productDetails, setProductDetails] = useState({
    data: null,
    similarProducts: null,
  });

  const [products, setProducts] = useState({
    addedToCart: "",
    productLoading: true,
  });

  async function getProductData(id) {
    const productData = await api.get(`/products/product/${id}`);
    setProductDetails({
      data: productData.data.product,
      similarProducts: productData.data.similarProducts,
    });
    setProducts({
      ...products,
      productLoading: false,
    });
  }

  useEffect(() => {
    getProductData(props.match.params.id);
  }, []);

  function setLoadingSpinner(boolean, boolean2) {
    setProducts({
      ...products,
      productLoading: boolean,
      addedToCart: boolean2,
    });
  }

  return (
    <div className='productDetails' key={props.match.params.id}>
      {products.addedToCart ? <div className={products.addedToCart === "in" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>Product Added to Cart Successfully!</div> : null}
      {products.productLoading ? (
        <div className='fullScreenLoader'>
          <div></div>
        </div>
      ) : null}
      <div className='productDetailsBody'>
        <h1 className='productDetailsHeading'>
          Product <span className='cartHeadingSpan'>Details</span>
        </h1>
        <div className='whiteBGProductDetails'>
          {productDetails.data ? (
            <div className='productDetailsSection'>
              <div className='productImageDisplay'>
                <div className='productMainImage'>
                  <img src={productDetails.data.featuredImage} alt='essence body lotion' />
                </div>
                <div className='productSubImagesContainer'>
                  {productDetails.data.images.map((image) => {
                    return (
                      <div key={image} className='productSubImages'>
                        <img src={image} alt='essence body lotion' />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='productDetailsInfo'>
                <h1 className='productName'>{productDetails.data.name}</h1>
                <div className='productPriceAndRating'>
                  <div className='productPrice'>
                    <span className='productOfferPrice'>
                      <span className='dollarSign'>$</span>
                      {productDetails.data.finalPrice}&nbsp;
                    </span>
                    <span className='productActualPrice'>
                      <span className='dollarSign'>$</span>
                      {productDetails.data.MRP}
                    </span>
                  </div>
                  <div>
                    <span className='ratingStars'>
                      <RatingsToStars rating={productDetails.data.ratings} />
                    </span>
                    <span className='ratingCounter'>&nbsp;{productDetails.data.ratedCustomers[0] && productDetails.data.ratedCustomers[0].id === null ? 0 : productDetails.data.ratedCustomers.length} ratings</span>
                  </div>
                </div>
                <div className='buyAndCartButtons'>
                  <button>Buy Now</button>
                  <button>Add to Cart</button>
                </div>
                <div className='availableOptions'>
                  <h2>Available Options:</h2>
                  {productDetails.data.options[0].name.length !== 0 && productDetails.data.options[0].EPIN.length !== 0
                    ? productDetails.data.options[0].name.map((name) => {
                        return (
                          <div
                            key={productDetails.data.options[0].EPIN.map((epin) => {
                              return epin;
                            })}
                            className='optionContents1'>
                            <div className='colorBox'></div>
                            <h3>{name}</h3>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className='productQuantity'>
                  <h2>Quantity:</h2>
                  <h3>
                    {productDetails.data.quantity.value} {productDetails.data.quantity.unit}
                  </h3>
                </div>
                <div className='productDescription'>
                  <h2>Description:</h2>
                  <ul>
                    {productDetails.data.description.map((info) => {
                      return <li key={info}>{info}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ) : null}
          <div className={styles.similarProducts}>
            <h1 className={styles.similarHeading}>Similar Products</h1>
            <div className={styles.listingContainer}>
              <ProductListing products={productDetails.similarProducts} startSpinner={setLoadingSpinner} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productDetailsFooter}>
        <Footer />
      </div>
    </div>
  );
}
