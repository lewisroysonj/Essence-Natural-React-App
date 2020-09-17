import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from '../../../actions';

import "./My cart.css";
import Footer from "../../Footer/Footer";

import ProteinBarProductImg from "./myCart imgs/Protein bar Image.png";
import BodyLotionImage from "./myCart imgs/Essence body lotion.png";
import FacewashImage from "./myCart imgs/essence facewash image.svg";
import FooterOverBG from "./myCart imgs/footerOverBG.svg";
// const MyCart = () => {
//   const cartItemQty = useSelector(state => state.cartItemQty);
//   const dispatch = useDispatch();
//export default MyCart;



//   return (
//   <React.Fragment>
//     <h1>cart item Qty : {cartItemQty} </h1>
//     <button onClick={() => dispatch(increment())} >+</button>
//     <button onClick={() => dispatch(decrement())} >-</button>
//   </React.Fragment>
//   )
// };

export default class MyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: 1,
      item2: 1,
      item3: 1,
      limitAlert: "",
      cartTotal: 0,
    };

    this.addButton = this.addButton.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  cartItemQty() {
    useSelector(state => state.cartItemQty);
  }

  addButton(e) {
    let itemName = e.target.name;

    this.setState({
      [itemName]: this.state[itemName] + 1,
    });

    if (this.state[itemName] >= 10) {
      this.setState({ limitAlert: [itemName] });
      this.setState({
        [itemName]: 10,
      });
    }
    console.log(this.state.limitAlert);
  }

  removeButton(e) {
    let itemName = e.target.name;

    this.setState({
      [itemName.qty]: this.state[itemName.qty] - 1,
    });

    if (this.state[itemName] <= 0) {
      this.setState({ [itemName]: 0 });
    } else if (this.state[itemName] <= 10) {
    }
  }

  render() {
    const cartItemQty = useSelector((state) => state.cartItemQty);

    return (
      <div className='myCart'>
        <div className='myCartBody'>
          <h1 className='cartHeading'>
            My <span className='cartHeadingSpan'>Cart</span>
          </h1>
          <div id='cartWhiteBG' className='whiteBG10'></div>
          <div className='myCartContent'>
            <p className='cartQuantity'>{cartItemQty()} items</p>
            {this.state.item1 < 1 ? null : (
              <div className='itemListing'>
                <img src={ProteinBarProductImg} alt='essence Protein bar' className='productImage'></img>
                <div className='productListDetails'>
                  <NavLink to='./product_details'>
                    <h1>Essence Protein Bar</h1>
                  </NavLink>
                  <div className='starRatings'>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star-half'></i>
                    </span>
                    <p id='ratingCounter'>123 ratings</p>
                  </div>
                  <div className='listPrice'>
                    <span className='listItemPrice'>$12.00</span>
                    <span className='listItemMRP'>$18.00</span>
                  </div>
                  <div className='qtySection'>
                    <span className='QtyCounter'>Qty:</span>
                    <button name='item1' className='qtyMinus' onClick={this.removeButton}>
                      -
                    </button>
                    <input type='number' value={cartItemQty} max='10'></input>
                    <button name='item1' className='qtyPlus' onClick={() => useDispatch(increment())} >
                      +
                    </button>
                  </div>
                  {this.state.limitAlert === "item1" ? <div style={{ color: "Orange", paddingTop: "15px", fontWeight: "700", paddingLeft: "18px", fontSize: "13px" }}>Max limit reached</div> : null}
                </div>
              </div>
            )}
            {this.state.item2 < 1 ? null : (
              <div className='itemListing'>
                <img src={BodyLotionImage} alt='Essence Body lotion' className='productImage'></img>
                <div className='productListDetails'>
                  <NavLink to='./product_details'>
                    <h1>Essence Coconut oil Body Lotion</h1>
                  </NavLink>
                  <div className='starRatings'>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star-half'></i>
                    </span>
                    <p id='ratingCounter'>123 ratings</p>
                  </div>
                  <div className='listPrice'>
                    <span className='listItemPrice'>$12.00</span>
                    <span className='listItemMRP'>$18.00</span>
                  </div>
                  <div className='qtySection'>
                    <span className='QtyCounter'>Qty:</span>
                    <button name='item2' className='qtyMinus' onClick={this.removeButton}>
                      -
                    </button>
                    <input type='number' value={this.state.item2.qty}></input>
                    <button name='item2' className='qtyPlus' onClick={this.addButton}>
                      +
                    </button>
                  </div>
                  {this.state.limitAlert === "item2" ? <div style={{ color: "Orange", paddingTop: "15px", fontWeight: "700", paddingLeft: "18px", fontSize: "13px" }}>Max limit reached</div> : null}
                </div>
              </div>
            )}
            {this.state.item3 < 1 ? null : (
              <div className='itemListing'>
                <img src={FacewashImage} alt='Essence Facewash' className='productImage'></img>
                <div className='productListDetails'>
                  <NavLink to='./product_details'>
                    <h1>Essence Tea tree oil facewash</h1>
                  </NavLink>
                  <div className='starRatings'>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star'></i>
                    </span>
                    <span>
                      <i class='fas fa-star-half'></i>
                    </span>
                    <p id='ratingCounter'>123 ratings</p>
                  </div>
                  <div className='listPrice'>
                    <span className='listItemPrice'>$12.00</span>
                    <span className='listItemMRP'>$18.00</span>
                  </div>
                  <div className='qtySection'>
                    <span className='QtyCounter'>Qty:</span>
                    <button name='item3' className='qtyMinus' onClick={this.removeButton}>
                      -
                    </button>
                    <input type='number' value={this.state.item3.qty}></input>
                    <button name='item3' className='qtyPlus' onClick={this.addButton}>
                      +
                    </button>
                  </div>
                  {this.state.limitAlert === "item3" ? <div style={{ color: "Orange", paddingTop: "15px", fontWeight: "700", paddingLeft: "18px", fontSize: "13px" }}>Max limit reached</div> : console.log("its not equal bro!!")}
                </div>
              </div>
            )}

            <div className='cartTotalSection'>
              <span className='totalCounter'>
                Cart Total: <strong>$36.00</strong>
              </span>
              <button className='checkoutButton'>CheckOut</button>
            </div>
            <img className='footerOverBGCart' src={FooterOverBG} alt='bg'></img>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
