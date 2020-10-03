/** @format */

import Axios from "axios";
import { browserRouter } from "react-router";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../lib/api";
import Cookies from "js-cookie";

import RatingsToStars from "../Util Components/RatingToStars";
import BodyLotionImage from "./Assets/Essence body lotion.png";

import styles from "./ProductList.module.scss";

export default function ProductList(props) {
  const [productStatus, setProduct] = useState({
    loading: true,
    error: null,
  });

  async function addToCart(e) {
    setProduct({
      ...productStatus,
      loading: true,
    });
    props.startSpinner(true, false);

    const token = Cookies.get("token");

    const productID = e.target.name;
    const productData = {
      addItem: true,
      id: productID.toString(),
    };

    if (token) {
      const res = await api.post("/cart", productData);
      console.log(res);

      props.startSpinner(false, "in");
      setProduct({
        ...productStatus,
        loading: true,
        error: res.data.error,
      });
      setTimeout(() => props.startSpinner(false, "out"), 3000);
    } else {
      props.startSpinner(false, "noAccess");

      setTimeout(() => props.startSpinner(false, "noAccessOut"), 3000);

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
  return (
    <>
      {props.products
        ? props.products.map((product) => {
            return (
              <div key={product._id} className={styles.productSection}>
                <a href={"/products/" + product._id}>
                  <div className={styles.imageContainer}>
                    <img className={styles.productImage} src={product.featuredImage} alt={product.name}></img>
                  </div>
                </a>
                <div className={styles.productListDetails}>
                  <a href={"/products/" + product._id}>
                    <h1 className={styles.heading}>{product.name}</h1>
                  </a>
                  <div className={styles.starRatings}>
                    <RatingsToStars rating={product.ratings} />
                    <p id='ratingCounter'>{!product.ratedCustomers.id ? 0 : product.ratedCustomers.length} ratings</p>
                  </div>
                  <div className={styles.listPrice}>
                    <span className={styles.listItemPrice}>${product.finalPrice}</span>
                    <span className={styles.listItemMRP}>${product.MRP}</span>
                  </div>
                  <div className={styles.purchaseOptions}>
                    <button className={styles.buyNow}>Buy Now</button>
                    <button className={styles.addToCart} name={product._id} onClick={addToCart}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
