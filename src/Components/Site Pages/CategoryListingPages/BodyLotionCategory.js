import React from 'react';

import './CategoryPages.css';
import Footer from '../../Footer/Footer';
import ProteinBarProductImg from './Protein bar Image.png';
import BodyLotionImage from './Essence body lotion.png';
import FacewashImage from './essence facewash image.svg';
import FooterOverBG from './footerOverBG.svg';
import { NavLink } from 'react-router-dom';


export default class SearchResults extends React.Component {
    render() {
        return (
            <div className="category">
            <div className="categoryBody" >
            <h1 className="categoryHeading" >Essence <span className="categoryHeadingSpan" >Body Lotions</span></h1>
            <div className="whiteBG20"></div>  
            <div className="categoryContent">
                <div className="itemListing">
                    <img src={ProteinBarProductImg} alt="essence Protein bar" className="productImage"></img>
                    <div className="productListDetails" >
                    <NavLink to="./product_details" ><h1>Essence Protein Bar</h1></NavLink>
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
                        <div className="purchaseOptions">
                          <button className="buyNow">Buy Now</button>
                          <button className="addToCart">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="itemListing">
                    <img src={BodyLotionImage} alt="essence Protein bar" className="productImage"></img>
                    <div className="productListDetails" >
                    <NavLink to="./product_details" ><h1>Essence Coconut Oil Body Lotion</h1></NavLink>
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
                        <div className="purchaseOptions">
                          <button className="buyNow">Buy Now</button>
                          <button className="addToCart">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="itemListing">
                    <img src={FacewashImage} alt="essence Protein bar" className="productImage"></img>
                    <div className="productListDetails" >
                    <NavLink to="./product_details" > <h1>Essence Facewash with Tea Tree Oil</h1></NavLink>
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
                        <div className="purchaseOptions">
                          <button className="buyNow">Buy Now</button>
                          <button className="addToCart">Add to Cart</button>
                        </div>
                    </div>
                  </div>
            <img className="footerOverBGCategory" src={FooterOverBG} alt="bg" ></img>

               </div>
           
            </div>

            <Footer />
        </div>
        );
    }
}