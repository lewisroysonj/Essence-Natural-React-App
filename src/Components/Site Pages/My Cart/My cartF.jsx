/** @format */

import React, { useState } from "react";

import "./My cart.css";
import Footer from "../../Footer/Footer";
import CartProduct from "../../UI Components/cart product template.js";
import api from "../../../lib/api";
import { useEffect } from "react";

export default function MyCart() {
  const [cart, setCart] = useState({
    items: [],
    cartTotal: "0",
    userID: "null",
    products: "",
  });

  const [products, setProducts] = useState({
    addedToCart: "",
    productLoading: true,
  });

  async function loadProducts() {
    try {
      const user = await api.get("/cart");

      setCart({
        ...cart,
        products: user.data.cartItems,
      });
    } catch (err) {
      console.error("Get User and Cart Items Error:", err);
    }
  }

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      loadProducts();
    }

    return () => {
      mounted = true;
    };
  }, []);

  function calculatePrice() {
    if (cart.products) {
      let prices = [];
      for (let i = 0; i < cart.products.length; i++) {
        prices.push(Number(cart.products[i].finalPrice));
      }

      let totalPrice = 0;
      for (let i in prices) {
        totalPrice += prices[i];
      }

      setCart({
        ...cart,
        cartTotal: totalPrice,
        loading: false,
      });

      setProducts({
        ...products,
        productLoading: false,
      });
    } else {
      console.log("no user found");
      setCart({
        ...cart,
        userID: false,
        loading: false,
      });
    }
  }

  useEffect(() => {
    calculatePrice();
  }, [cart.products]);

  console.log(cart);

  function setLoadingSpinner(boolean, boolean2) {
    setProducts({
      ...products,
      productLoading: boolean,
      addedToCart: boolean2,
    });
  }

  function setChangedProducts(products) {
    setCart({
      ...cart,
      products: products,
    });
  }

  return (
    <React.Fragment>
      <div className='myCart'>
        {products.addedToCart ? <div className={products.addedToCart === "inverse" || products.addedToCart === "in" ? "cartSuccessMessage" : "cartSuccessMessageOut"}>{products.addedToCart === "inverse" || products.addedToCart === "outverse" ? "Removed from Cart Successfully!" : "Added to Cart Successfully!"}</div> : null}
        {products.productLoading ? (
          <div className='fullScreenLoader'>
            <div></div>
          </div>
        ) : null}
        <h1>
          <span>My</span> Cart
        </h1>
        <div class='cartUpperBG'>
          <h3>
            {cart.products.length} {cart.products.length > 1 ? "items" : "item"}
          </h3>
          <CartProduct products={cart.products} startSpinner={setLoadingSpinner} userID={cart.userID} changeProducts={setChangedProducts} loadingState={products} />

          <div className='cartTotalSection'>
            <span className='totalCounter'>
              Cart Total: <strong>${cart.cartTotal}</strong>
            </span>
            <button className='checkoutButton'>CheckOut</button>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
}
