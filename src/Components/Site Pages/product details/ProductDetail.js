/** @format */

import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import Footer from "../../Footer/Footer";

import ProteinBarProductImg from "./productdetails imgs/Protein bar Image.png";
import BodyLotionImage from "./productdetails imgs/Essence body lotion.png";
import fullStar from "./productdetails imgs/fullStar.svg";
import halfStar from "./productdetails imgs/halfStar.svg";
import nullStar from "./productdetails imgs/nullStar.svg";

import styles from "./ProductDetail.module.scss";

import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../../actions";

import axios from "axios";

export default function ProductDetail(props) {
  const [productDetails, setProductDetails] = useState({
    data: null,
  });

  async function getProductData(id) {
    const productData = await axios.get(`http://localhost:5000/products/product/${id}`);
    console.log(productData);
    setProductDetails({
      data: productData.data.product,
    });
  }
  console.log(productDetails);

  // const productData = useSelector((state) => state.getProductDetails);
  // const getData = useDispatch();

  useEffect(() => {
    getProductData(props.match.params.id);
  }, []);

  function ratingsToStars(rating) {
    return (
      <>
        {rating > 0.5 ? <img src={fullStar}></img> : rating <= 0.5 && rating > 0 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
        {rating > 1.5 ? <img src={fullStar}></img> : rating <= 1.5 && rating > 1 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
        {rating > 2.5 ? <img src={fullStar}></img> : rating <= 2.5 && rating > 2 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
        {rating > 3.5 ? <img src={fullStar}></img> : rating <= 3.5 && rating > 3 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
        {rating > 4.5 ? <img src={fullStar}></img> : rating <= 4.5 && rating > 4 ? <img src={halfStar}></img> : <img src={nullStar}></img>}
      </>
    );
  }

  return (
    <div className='productDetails'>
      <div className='productDetailsBody'>
        <h1 className='productDetailsHeading'>
          Product <span className='cartHeadingSpan'>Details</span>
        </h1>
        <div className='whiteBGProductDetails'>
          {productDetails.data ? (
            <div className='productDetailsSection'>
              <div className='productImageDisplay'>
                <div className='productMainImage'>
                  <img src={productDetails.data.featuredImage} alt='essence body lotion' />
                </div>
                <div className='productSubImagesContainer'>
                  {productDetails.data.images.map((image) => {
                    return (
                      <div key={image} className='productSubImages'>
                        <img src={image} alt='essence body lotion' />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='productDetailsInfo'>
                <h1 className='productName'>{productDetails.data.name}</h1>
                <div className='productPriceAndRating'>
                  <div className='productPrice'>
                    <span className='productOfferPrice'>
                      <span className='dollarSign'>$</span>
                      {productDetails.data.finalPrice}&nbsp;
                    </span>
                    <span className='productActualPrice'>
                      <span className='dollarSign'>$</span>
                      {productDetails.data.MRP}
                    </span>
                  </div>
                  <div>
                    <span className='ratingStars'>{ratingsToStars(productDetails.data.ratings)}</span>
                    <span className='ratingCounter'>&nbsp;{productDetails.data.ratedCustomers[0] && productDetails.data.ratedCustomers[0].id === null ? 0 : productDetails.data.ratedCustomers.length} ratings</span>
                  </div>
                </div>
                <div className='buyAndCartButtons'>
                  <button>Buy Now</button>
                  <button>Add to Cart</button>
                </div>
                <div className='availableOptions'>
                  <h2>Available Options:</h2>
                  {productDetails.data.options[0].name.length != 0 && productDetails.data.options[0].EPIN.length != 0
                    ? productDetails.data.options[0].name.map((name) => {
                        return (
                          <div
                            key={productDetails.data.options[0].EPIN.map((epin) => {
                              return epin;
                            })}
                            className='optionContents1'>
                            <div className='colorBox'></div>
                            <h3>{name}</h3>
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className='productQuantity'>
                  <h2>Quantity:</h2>
                  <h3>
                    {productDetails.data.quantity.value} {productDetails.data.quantity.unit}
                  </h3>
                </div>
                <div className='productDescription'>
                  <h2>Description:</h2>
                  <ul>
                    {productDetails.data.description.map((info) => {
                      return <li key={info}>{info}</li>;
                    })}
                  </ul>
                </div>
                {/* <div display='none' className='productTags'>
                  <h2>Tags:</h2>
                  <ul>
                    {productDetails.data.tags.map((tag) => {
                      return <li>{tag}</li>;
                    })}
                  </ul>
                </div> */}
                {/* <div className="productDetailsDivider">
                              <img src={DottedLines} alt="divider" />
                          </div> */}
              </div>
            </div>
          ) : null}
          <div className={styles.similarProducts}>
            <h1 className={styles.similarHeading}>Similar Products</h1>
            <div className={styles.listingContainer}>
              <div className={styles.productSection}>
                <div className={styles.imageContainer}>
                  <img className={styles.productImage} src={ProteinBarProductImg} alt='essence Protein bar' className='productImage'></img>
                </div>
                <div className={styles.productListDetails}>
                  <NavLink to='/'>
                    <h1 className={styles.heading}>Essence Protein Bar</h1>
                  </NavLink>
                  <div className={styles.starRatings}>
                    {ratingsToStars(3.5)}
                    <p id='ratingCounter'>123 ratings</p>
                  </div>
                  <div className={styles.listPrice}>
                    <span className={styles.listItemPrice}>$12.00</span>
                    <span className={styles.listItemMRP}>$18.00</span>
                  </div>
                  <div className={styles.purchaseOptions}>
                    <button className={styles.buyNow}>Buy Now</button>
                    <button className={styles.addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className={styles.productSection}>
                <div className={styles.imageContainer}>
                  <img className={styles.productImage} src={ProteinBarProductImg} alt='essence Protein bar' className='productImage'></img>
                </div>
                <div className={styles.productListDetails}>
                  <NavLink to='./product_details'>
                    <h1 className={styles.heading}>Essence Protein Bar</h1>
                  </NavLink>
                  <div className={styles.starRatings}>
                    {ratingsToStars(3.5)}
                    <p id='ratingCounter'>123 ratings</p>
                  </div>
                  <div className={styles.listPrice}>
                    <span className={styles.listItemPrice}>$12.00</span>
                    <span className={styles.listItemMRP}>$18.00</span>
                  </div>
                  <div className={styles.purchaseOptions}>
                    <button className={styles.buyNow}>Buy Now</button>
                    <button className={styles.addToCart}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>

            <button className={styles.showMoreButton}>Show More</button>
          </div>
        </div>
      </div>
      <div className={styles.productDetailsFooter}>
        <Footer />
      </div>
    </div>
  );
}
