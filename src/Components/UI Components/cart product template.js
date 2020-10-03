/** @format */

import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, maxStop } from "../../actions";
import styles from "./ProductList.module.scss";
import productImage from "./Assets/Essence body lotion.png";
import RatingsToStars from "../Util Components/RatingToStars";
import api from "../../lib/api";

export default function CartProduct(props) {
  const [cartProduct, setCartProduct] = useState({
    items: [],
    addItem: false,
    id: "",
    user: "",
    loading: true,
    loggedUser: true,
    products: false,
  });

  // useEffect(() => {
  //   setCartProduct({
  //     ...cartProduct,
  //     items: props.products,
  //   });
  // }, [props.products]);

  function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);

      return result;
    }, {});
  }

  useEffect(() => {
    const loggedUser = props.isUser();
    if (loggedUser) {
      setCartProduct({
        ...cartProduct,
        loggedUser: true,
        products: props.products,
      });
    } else {
      setCartProduct({
        ...cartProduct,
        loggedUser: false,
      });
    }
  }, [props.products]);
  console.log(props.products);

  useEffect(() => {
    if (cartProduct.products) {
      const groupedProducts = groupBy(cartProduct.products, "name");
      console.log(groupedProducts);
      console.log(props.products);

      const cartproductArray = [];

      let igg = Object.keys(groupedProducts);

      for (let i = 0; i < Object.keys(groupedProducts).length; i++) {
        console.log("products", groupedProducts);
        console.log(igg[i]);
        console.log(groupedProducts[igg[i]].length);
        groupedProducts[igg[i]][0].qty = groupedProducts[igg[i]].length;
        cartproductArray.push(groupedProducts[igg[i]][0]);
        console.log(groupedProducts[igg[i]].length);
      }
      console.log(cartproductArray);
      setCartProduct({
        ...cartProduct,
        items: cartproductArray,
      });
    }
  }, [cartProduct.products]);

  console.log(props);
  async function handleIncrement(e) {
    props.startSpinner(true, "out");
    const productID = e.target.name;
    const product = {
      addItem: true,
      id: productID.toString(),
    };

    const res = await api.post(`/cart`, product);
    console.log("uuu", res);
    props.startSpinner(false, "in");

    props.changeProducts(res.data.cartItems);

    setTimeout(() => {
      props.startSpinner(false, "out");
    }, 2000);
  }

  async function handleDecrement(e) {
    const productID = e.target.name;
    props.startSpinner(true, "outverse");

    const product = {
      addItem: false,
      id: productID.toString(),
    };

    const res = await api.post(`/cart`, product);
    console.log("uuu", res);

    props.startSpinner(false, "inverse");

    props.changeProducts(res.data.cartItems);

    setTimeout(() => {
      props.startSpinner(false, "outverse");
    }, 2000);
  }

  console.log(cartProduct, "dsdsd");

  console.log(cartProduct.loggedUser);

  function handleCheckoutItems() {
    console.log(cartProduct.items);

    const cartItems = [];
    for (let i = 0; i < cartProduct.items.length; i++) {
      let product = {
        price_data: {
          currency: "usd",
          product_data: {
            name: cartProduct.items[i].name,
            images: [cartProduct.items[i].featuredImage],
          },
          unit_amount: Number(cartProduct.items[i].finalPrice),
        },
        quantity: Number(cartProduct.items[i].qty),
      };
      cartItems.push(product);
    }
    console.log(cartItems);
    props.setCheckoutProducts(cartItems);
  }

  useEffect(() => {
    handleCheckoutItems();
  }, [cartProduct.items]);

  return (
    <>
      {cartProduct.items && cartProduct.loggedUser && cartProduct.items.length > 0 ? (
        cartProduct.items.map((product) => {
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
                <div className={styles.quantitySection}>
                  <span>Qty:</span>

                  <div className={styles.buttons}>
                    <button name={product._id} onClick={handleDecrement}>
                      -
                    </button>
                    <p>{product.qty}</p>
                    <button name={product._id} onClick={handleIncrement}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : cartProduct.loggedUser && cartProduct.items && cartProduct.items.length === 0 && !props.loadingState.productLoading ? (
        <div className={styles.noCartItems}>
          <h3>Your cart is empty!</h3>
          {console.log("broooo", console.log(props.isUser))}

          <NavLink to='/all-products'>Explore All Products!</NavLink>
        </div>
      ) : !cartProduct.loggedUser && !props.loadingState.productLoading ? (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "Please Sign in to add items to your cart" },
          }}
        />
      ) : (
        console.log("yooo", console.log(props.isUser))
      )}
    </>
  );
}
