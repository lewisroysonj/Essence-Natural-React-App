/** @format */

import React, { useState } from "react";

import "./My cart.css";
import Footer from "../../Footer/Footer";
import CartProduct from "../../UI Components/cart product template.js";
import api from "../../../lib/api";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { NavLink, Redirect } from "react-router-dom";
import { checkUser } from "../../../lib/user";

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
        cartTotal: user.data.cartTotal,
        cartQuantity: user.data.cartQuantity,
      });
      setProducts({
        ...products,
        productLoading: false,
      });
    } catch (err) {
      console.error("Get User and Cart Items Error:", err);
      setProducts({
        ...products,
        productLoading: false,
      });
    }
  }

  useEffect(() => {
    let mounted = false;
    const user = checkUser();
    console.log(user);

    if (!mounted) {
      if (user) {
        loadProducts();
        setCart({
          ...cart,
          isUser: true,
        });
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
      products: products.cartItems,
      cartTotal: products.cartTotal,
      cartQuantity: products.cartQuantity,
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
            {cart.cartQuantity} {cart.cartQuantity > 1 ? "items" : "item"}
          </h3>
          <CartProduct products={cart.products} startSpinner={setLoadingSpinner} isUser={checkUser} changeProducts={setChangedProducts} loadingState={products} setCheckoutProducts={setCheckoutProducts} />

          <div className='cartTotalSection'>
            <span className='totalCounter'>
              Cart Total: <strong>${cart.cartTotal}</strong>
            </span>
            <button className='checkoutButton'>
              <a href='/checkout'>CheckOut</a>
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
