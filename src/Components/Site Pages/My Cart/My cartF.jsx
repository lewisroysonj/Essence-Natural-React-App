/** @format */

import React from "react";

import "./My cart.css";
import Footer from "../../Footer/Footer";
import CartProduct from "../../Products/cart product template.jsx";

// import ProteinBarProductImg from "./myCart imgs/Protein bar Image.png";
// import BodyLotionImage from "./myCart imgs/Essence body lotion.png";
// import FacewashImage from "./myCart imgs/essence facewash image.svg";

export default function MyCart() {
  return (
    <React.Fragment>
      {/* <div className='myCart'>
        <div className='myCartBody'>
          <h1 className='cartHeading'>
            My <span className='cartHeadingSpan'>Cart</span>
          </h1>
          <div id='cartWhiteBG' className='whiteBG10'>
          <div className='myCartContent'>
            <p className='cartQuantity'>3 items</p>
             
                 <CartProduct />
                 <CartProduct />
                 <CartProduct />
                 <CartProduct />
                 <CartProduct />
                 <CartProduct />

            
          </div>
          </div>
          

        </div>
        <Footer />
      </div> */}

      <div className='myCart'>
        <h1>
          <span>My</span> Cart
        </h1>
        <div class='cartUpperBG'>
          <h3>3 items</h3>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />

          <div className='cartTotalSection'>
            <span className='totalCounter'>
              Cart Total: <strong>$36.00</strong>
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
