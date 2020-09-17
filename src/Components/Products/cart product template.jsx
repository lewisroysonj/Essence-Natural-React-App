import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, maxStop} from '../../actions';



export default function CartProduct() { 

    const productImage = require("./product imgs/Protein bar Image.png"); 
    const cartItemQty = useSelector(state => state.cartItemQty);
    const dispatch = useDispatch();
    const popAlert = () =>  <div className="limitAlertStyle" >Max limit reached</div>  
 

    return (
     <React.Fragment>

      {cartItemQty < 1 ? null : <div className='itemListing'>
       <img src={productImage} alt='essence Protein bar' className='productImage'></img>
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
        
        <button name='item1' className='qtyMinus' onClick={() => dispatch(decrement()) } >
          - 
        </button>
        <p>{cartItemQty}</p>
        <button name='item1' className='qtyPlus' onClick={cartItemQty < 10 ? () => dispatch(increment()) : () => dispatch(maxStop()) }>
          +
        </button>
      </div>
      {cartItemQty === 10 ? popAlert() : null}
    </div>
  </div> }

     </React.Fragment>
     )
     
    
}