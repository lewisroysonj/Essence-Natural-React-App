import React from 'react';
import './Home.css';
import Footer from '../../Footer/Footer'


import HeroArt1 from './hero page art.svg';
import HomeWhite2 from './HomeWhite bg2.svg';
import HomeWhite3 from './HomeWhite bg3.svg';
import BodyLotionText from './Body lotion text.svg';
import ProteinBarText from './Protein bar Text.svg';
import EssenceDarkbg from './Essence Dark bg.svg';
import FacewashText from './Facewash text area.svg';
import HomeWhite4 from './HomeWhite4.svg';
import DottedCurveDivider from './Dotted curve divider.svg';
import newsletterBG from './newsletter bg.svg';
import custReviewsBody from './custReviews body.svg';
import BodyLotionImage from './Essence body lotion.png';
import FacewashImage from './essence facewash image.svg';
import ProteinBarImage from './Protein bar Image.png';
import { NavLink } from 'react-router-dom';
import NewsletterSignUpForm from './NewsletterForm';



export default class Home extends React.Component {

    render() {


        return (
            <div className="homePage">
               <div className="bgDiv1"></div> 
               <div className="bgDiv2"></div> 
                <img className="HomeHeroArt1" src={HeroArt1} alt="Home Illustration"/>
                <img className="HomeWhite2" src={HomeWhite2} alt="bg" />
                <img className="HomeWhite3" src={HomeWhite3} alt="bg" />
                <div className="BodyLotionImage">
                    <div className="ProductBG1"></div>
                    <img src={BodyLotionImage} alt="essence body lotion"/>
                </div>
                <div className="BodyLotionText">
                  <img src={BodyLotionText} alt="text" />
                  <NavLink exact to="/body_lotions" ><button>See More&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></button></NavLink>
                </div>
                <div className="ProteinBarImage">
                    <div className="ProductBG2"></div>
                    <img src={ProteinBarImage} alt="essence protein" />

                </div>
                <div className="ProteinBarText">
                  <img src={ProteinBarText} alt="text" />
                  <NavLink exact to="/nutrition_diet_foods" ><button>See More&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></button></NavLink>
                </div>
                <img className="EssenceDarkbg" src={EssenceDarkbg} alt="essence logo" />
                <div className="FacewashImage">
                    <div className="ProductBG3"></div>
                    <img src={FacewashImage} alt="essence facewash" /> 
                </div>
                <div className="FacewashText">
                  <img src={FacewashText} alt="text" />
                  <NavLink exact to="/facewash" ><button>See More&nbsp;&nbsp;<i class="fas fa-chevron-right"></i></button></NavLink>
                </div>
                <img src={HomeWhite4} className="HomeWhite4" alt="bg" />
                <img src={DottedCurveDivider} className="DottedCurveDivider" alt="divider" />
                <div className="bgDiv3"></div>
                <div className="newsletterBG" >
                    <img src={newsletterBG} alt="bg"/>
                    <NewsletterSignUpForm />
                </div> 
                <div className="customerReviews" >
                    <img src={custReviewsBody} alt="text" />
                </div>
                <Footer />
                




            </div>
        )
    }
}