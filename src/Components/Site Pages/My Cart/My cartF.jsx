/** @format */

import React, { useState } from "react";

import "./My cart.css";
import Footer from "../../Footer/Footer";
import CartProduct from "../../UI Components/cart product template.js";
import api from "../../../lib/api";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink, Redirect } from "react-router-dom";

export default function MyCart() {
  const [cart, setCart] = useState({
    items: [],
    cartTotal: "0",
    isUser: "",
    products: "",
  });

  const [products, setProducts] = useState({
    addedToCart: "",
    productLoading: false,
  });

  function checkUser() {
    let token = Cookies.get("token");
    if (token) {
      setCart({
        ...cart,
        isUser: true,
      });
      return true;
    } else {
      setCart({
        ...setCart,
        isUser: false,
      });
      return false;
    }
  }

  async function loadProducts() {
    try {
      setProducts({
        ...products,
        productLoading: true,
        calledBy: "loadProductStartUp",
      });
      const user = await api.get("/cart");

      setCart({
        ...cart,
        products: user.data.cartItems,
      });
      setProducts({
        ...products,
        productLoading: false,
        calledBy: "loadProductsEnd",
      });
    } catch (err) {
      console.error("Get User and Cart Items Error:", err);
    }
  }

  useEffect(() => {
    let mounted = false;
    const user = checkUser();

    console.log(cart.isUser);
    if (!mounted) {
      if (user) {
        loadProducts();
      } else {
        setCart({
          ...cart,
          isUser: false,
        });
        setProducts({
          ...products,
          productLoading: false,
          calledBy: "useStateLoadProductElse",
        });
      }
    }

    return () => {
      mounted = true;
    };
  }, []);
  console.log(products);

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

  function setCheckoutProducts(products) {
    setCart({
      ...cart,
      checkout: products,
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
          <CartProduct products={cart.products} startSpinner={setLoadingSpinner} isUser={checkUser} changeProducts={setChangedProducts} loadingState={products} setCheckoutProducts={setCheckoutProducts} />

          <div className='cartTotalSection'>
            <span className='totalCounter'>
              Cart Total: <strong>${cart.cartTotal}</strong>
            </span>
            <button className='checkoutButton'>
              <NavLink
                to={{
                  pathname: "/checkout",
                  state: { checkout: cart.checkout },
                }}>
                CheckOut
              </NavLink>
            </button>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
}
