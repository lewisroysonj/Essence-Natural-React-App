import React from 'react';
import './ProductDetail.css';
import Footer from '../../Footer/Footer';

import ProteinBarProductImg from './productdetails imgs/Protein bar Image.png';
import BodyLotionImage from './productdetails imgs/Essence body lotion.png';
import FooterOverBG from './productdetails imgs/footerOverBG.svg';
import DottedLines from './productdetails imgs/Dotted lines.svg';
import { NavLink } from 'react-router-dom';

export default class ProductDetail extends React.Component {
    render() {
        return (
            <div className="productDetails">
                <div className="productDetailsBody" >
                   <h1 className="productDetailsHeading" >Product <span className="cartHeadingSpan" >Details</span></h1>
                   <div className="whiteBGProductDetails"> 
                   <div className="productDetailsSection">
                      <div className="productImageDisplay" >
                          <div className="productMainImage" >
                              <img src={BodyLotionImage} alt="essence body lotion"/>
                          </div>
                          <div className="productSubImagesContainer" >
                              <div className="productSubImages" >
                                <img src={BodyLotionImage} alt="essence body lotion"/>
                              </div>
                              <div className="productSubImages" >
                                <img src={BodyLotionImage} alt="essence body lotion"/>
                              </div>
                              <div className="productSubImages" >
                                <img src={BodyLotionImage} alt="essence body lotion"/>
                              </div>

                          </div>
                      </div>
                      <div className="productDetailsInfo">
                          <h1 className="productName">Essence Body Lotion with Coconut Milk</h1>
                          <div className="productPriceAndRating">
                              <span className="productOfferPrice"><span className="dollarSign" >$</span>1200.00</span>
                              <span className="productActualPrice" ><span className="dollarSign" >$</span>1200.00</span>
                              <span className="ratingStars" >
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star-half"></i></span>
                              </span>
                              <span className="ratingCounter" >123 ratings</span>
                          </div>
                          <div className="buyAndCartButtons" >
                              <button>Buy Now</button>
                              <button>Add to Cart</button>
                          </div>
                          <div className="availableOptions">
                              <h2>Available Options:</h2>
                              <div className="optionContents1" >
                                <div className="colorBox"></div>
                                <h3>Coconut Milk</h3>
                              </div>
                              <div className="optionContents2" >
                                <div className="colorBox"></div>
                                <h3>Aloe Vera</h3>
                              </div>
                              <div className="optionContents3" >
                                <div className="colorBox"></div>
                                <h3>Lemon</h3>
                              </div>
                          </div>
                          <div className="productQuantity" >
                              <h2>Quantity:</h2>
                              <h3>200 ml</h3>
                          </div>
                          <div className="productDescription">
                              <h2>Description:</h2>
                              <ul>
                                  <li>Integer sit amet erat sodales, sagittis nisi id, varius eros.</li>
                                  <li>Nulla ultricies est non orci finibus, a suscipit tellus vestibulum.</li>
                                  <li>Quisque vestibulum lacus ut eros vulputate volutpat.</li>
                                  <li>Mauris facilisis eros vitae orci imperdiet, non dictum mi congue.</li>
                                  <li>Nunc in elit vitae nibh commodo aliquet.</li>
                              </ul>
                          </div>
                          <div className="productDetailsDivider">
                              <img src={DottedLines} alt="divider" />
                          </div>

                      </div>
                   
                   
                   </div>
                   <div className="similarProducts">
                       <div className="similarHeading" >Similar Products</div>
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
                <img className="footerOverBGProductDetails" src={FooterOverBG} alt="bg" ></img>
                   
                   </div>

                  

                </div>
                </div>
                <Footer />
               
            </div>
        )
    }
}