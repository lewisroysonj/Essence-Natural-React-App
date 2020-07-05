import React from 'react';
import './ProductDetail.css';
import Footer from '../../Footer/Footer';

import ProteinBarProductImg from './productdetails imgs/Protein bar Image.png';
import BodyLotionImage from './productdetails imgs/Essence body lotion.png';
import FacewashImage from './productdetails imgs/essence facewash image.svg';
import FooterOverBG from './productdetails imgs/footerOverBG.svg';

export default class ProductDetail extends React.Component {
    render() {
        return (
            <div className="myCart">
                <div className="myCartBody" >
                   <h1 className="cartHeading" >Product <span className="cartHeadingSpan" >Details</span></h1>
                   <div className="whiteBG10"></div>  
                   <div className="myCartContent">
                   
                   
                   <img className="footerOverBGCart" src={FooterOverBG} alt="bg" ></img>
                   </div>

                  

                </div>
                <Footer />
               
            </div>
        )
    }
}