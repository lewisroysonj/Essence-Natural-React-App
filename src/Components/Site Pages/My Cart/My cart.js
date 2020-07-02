import React from 'react';

import './My cart.css';
import Footer from '../../Footer/Footer';

import ProteinBarProductImg from './myCart imgs/Protein bar Image.png';
import BodyLotionImage from './myCart imgs/Essence body lotion.png';
import FacewashImage from './myCart imgs/essence facewash image.svg';
import FooterOverBG from './myCart imgs/footerOverBG.svg';

export default class MyCart extends React.Component {
    render() {
        return (
            <div className="myCart">
                <div className="myCartBody" >
                <h1 className="cartHeading" >My <span className="cartHeadingSpan" >Cart</span></h1>
                <div className="whiteBG20"></div>  
                <div className="myCartContent">
                    <p className="cartQuantity" >3 items</p>
                    <div className="itemListing">
                        <img src={ProteinBarProductImg} alt="essence Protein bar" className="productImage"></img>
                        <div className="productListDetails" >
                            <h1>Essence Protein Bar</h1>
                            <div className="starRatings">
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star-half"></i></span>
                              <p id="ratingCounter">123 ratings</p>
                            </div>
                            <div className="listPrice">
                              <span className="listItemPrice">$12.00</span>
                              <span className="listItemMRP">$18.00</span>
                            </div>
                            <div className="qtySection">
                              <span className="QtyCounter">Qty:</span>
                              <button className="qtyMinus">-</button>
                              <input type="number" value="1" ></input>
                              <button className="qtyPlus">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="itemListing">
                        <img src={BodyLotionImage} alt="Essence Body lotion" className="productImage"></img>
                        <div className="productListDetails" >
                            <h1>Essence Coconut oil Body Lotion</h1>
                            <div className="starRatings">
                            <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star-half"></i></span>
                              <p id="ratingCounter">123 ratings</p>

                            </div>
                            <div className="listPrice">
                            <span className="listItemPrice">$12.00</span>
                            <span className="listItemMRP">$18.00</span>
                            </div>
                            <div className="qtySection">
                              <span className="QtyCounter">Qty:</span>
                              <button className="qtyMinus">-</button>
                              <input type="number" value="1" ></input>
                              <button className="qtyPlus">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="itemListing">
                        <img src={FacewashImage} alt="Essence Facewash" className="productImage"></img>
                        <div className="productListDetails" >
                            <h1>Essence Tea tree oil facewash</h1>
                            <div className="starRatings">
                            <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star"></i></span>
                              <span><i class="fas fa-star-half"></i></span>
                              <p id="ratingCounter">123 ratings</p>
                            </div>
                            <div className="listPrice">
                            <span className="listItemPrice">$12.00</span>
                            <span className="listItemMRP">$18.00</span>
                            </div>
                            <div className="qtySection">
                              <span className="QtyCounter">Qty:</span>
                              <button className="qtyMinus">-</button>
                              <input type="number" value="1" ></input>
                              <button className="qtyPlus">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="cartTotalSection">
                      <span className="totalCounter" >Cart Total: <strong>$36.00</strong></span>
                      <button className="checkoutButton" >CheckOut</button>
                    </div>
                    <img className="footerOverBG" src={FooterOverBG} alt="bg" ></img>
                </div>

                  

                </div>
                <Footer />
               
            </div>
        )
    }
}