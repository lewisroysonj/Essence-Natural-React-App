/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import api from "../../../lib/api";
import Cookies from "js-cookie";
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
  console.log(productDetails);
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
  console.log(products);

  async function addToCart(e) {
    setLoadingSpinner(true, "out");

    const token = Cookies.get("token");

    const productID = e.target.name;
    const productData = {
      addItem: true,
      id: productID.toString(),
    };

    if (token) {
      const res = await api.post("/cart", productData);
      console.log(res);

      setLoadingSpinner(false, "in");

      setTimeout(() => setLoadingSpinner(false, "out"), 2500);
    } else {
      setLoadingSpinner(false, "noAccess");
      setTimeout(() => setLoadingSpinner(false, "noAccessOut"), 2500);

      // const tempCart = [];
      // const cookieCart = Cookies.get("tempCart");
      // if (cookieCart) {
      //   let tempProduct = cookieCart;
      //   tempProduct = JSON.parse(tempProduct);
      //   tempProduct.push(productData);
      //   Cookies.set("tempCart", tempProduct);
      // } else {
      //   Cookies.set("tempCart", tempCart);
      //   let tempProduct = cookieCart;
      //   tempProduct = JSON.parse(tempProduct);
      //   tempProduct.push(productData);
      //   Cookies.set("tempCart", tempProduct);
      // }
    }
  }

  async function buyNow(e) {
    let productID = e.target.name;
    const response = await api.post("/cart/buynow", { id: productID });
    console.log(productID);
    console.log(response);
    sessionStorage.setItem("buynow", JSON.stringify(response.data.product));
    window.location.pathname = "/checkout";
  }

  return (
    <div className='productDetails' key={props.match.params.id}>
      {products.addedToCart ? <div className={products.addedToCart === "in" || products.addedToCart === "noAccess" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>{products.addedToCart === "noAccess" || products.addedToCart === "noAccessOut" ? "Please Sign in to Add Products to Cart" : "Product Added to Cart Successfully!"}</div> : null}

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
                  <img src={productDetails.data.featuredImage} alt={productDetails.data.name} />
                </div>
                {productDetails.data.images[0] ? (
                  <div className='productSubImagesContainer'>
                    {productDetails.data.images.map((image) => {
                      return (
                        <div key={image} className='productSubImages'>
                          <img src={image} alt={productDetails.data.name} />
                        </div>
                      );
                    })}
                  </div>
                ) : null}
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
                    <span className='ratingCounter'>&nbsp;{productDetails.data.ratedCustomers.length} ratings</span>
                  </div>
                </div>
                <div className='buyAndCartButtons'>
                  <button name={productDetails.data._id} onClick={buyNow}>
                    Buy Now
                  </button>
                  <button name={productDetails.data._id} onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
                {productDetails.data.options[0].EPIN[0] ? (
                  <div className='availableOptions'>
                    <h2>Available Options:</h2>
                    {productDetails.data.options[0].name.length !== 0 && productDetails.data.options[0].EPIN.length !== 0
                      ? productDetails.data.options[0].name.map((name) => {
                          return (
                            <div key={name} className='optionContents1'>
                              <div className='colorBox'></div>
                              <h3>{name}</h3>
                            </div>
                          );
                        })
                      : null}
                  </div>
                ) : null}
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
          {!products.productLoading ? (
            <div className={styles.similarProducts}>
              <h1 className={styles.similarHeading}>Similar Products</h1>
              <div className={styles.listingContainer}>
                <ProductListing products={productDetails.similarProducts} startSpinner={setLoadingSpinner} />
              </div>
            </div>
          ) : (
            <div className={styles.similarProducts}></div>
          )}
        </div>
      </div>
      <div className={styles.productDetailsFooter}>
        <Footer />
      </div>
    </div>
  );
}
