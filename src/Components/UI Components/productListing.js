/** @format */

import Axios from "axios";
import { browserRouter } from "react-router";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../lib/api";

import RatingsToStars from "../Util Components/RatingToStars";
import BodyLotionImage from "./Assets/Essence body lotion.png";

import styles from "./ProductList.module.scss";

export default function ProductList(props) {
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
                    <button className={styles.addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
}
