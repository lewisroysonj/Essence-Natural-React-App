/** @format */

import React from "react";

import "./Home.css";

import Footer from "../../Footer/Footer";

import HeroArt1 from "./hero page art.svg";
import HeroArtMobile from "./Hero image illustration mobile.svg";
import HomeWhite2 from "./HomeWhite bg2.svg";
import HomeWhite3 from "./HomeWhite bg3.svg";
import BodyLotionText from "./Body lotion text.svg";
import BodyLotionTextMobile from "./Body lotion text mobile.svg";
import ProteinBarText from "./Protein bar Text.svg";
import ProteinBarTextMobile from "./Protein bar text mobile.svg";
import EssenceDarkbg from "./Essence Dark bg.svg";
import FacewashText from "./Facewash text area.svg";
import FacewashTextMobile from "./Facewash text mobile.svg";
import HomeWhite4 from "./HomeWhite4.svg";
import DottedCurveDivider from "./Dotted curve divider.svg";
import newsletterBG from "./newsletter bg.svg";
import newsletterBGMobile from "./Subscribe form illustration mobile.svg";
import BodyLotionImage from "./Essence body lotion.png";
import FacewashImage from "./essence facewash image.png";
import ProteinBarImage from "./Protein bar Image.png";
import NewsletterSignUpForm from "../../UI Components/NewsletterForm";

export default function Home() {
  return (
    <main className='homePage'>
      <div className='bgDiv1'></div>
      <div className='bgDiv2'></div>
      <img className='HomeHeroArt1' src={HeroArt1} alt='Home Illustration' />
      <div className='HomeHeroEclipseGreenMobile'>
        <div>
          <br></br>
          <br></br>
          <h2>
            <span>Find</span> the Nature you
          </h2>
          <h1>LOVE</h1>
          <hr></hr>
          <p>Explore products purely inspired from nature, with quality ingredients curated to provide the best benefits to you and nature itself.</p>
        </div>
      </div>
      <div className='HomeHeroEclipseGreyMobile'></div>
      <img className='HomeHeroArtMobile' src={HeroArtMobile} alt='Girl enjoying Nature' />
      <img className='HomeWhite2' src={HomeWhite2} alt='bg' />
      <img className='HomeWhite3' src={HomeWhite3} alt='bg' />
      <div className='BodyLotionImage'>
        <div className='ProductBG1'>
          <img src={BodyLotionImage} alt='essence body lotion' />
        </div>
      </div>
      <div className='BodyLotionText'>
        <img src={BodyLotionText} alt='text' />
        <a href='/body-lotions'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <div className='BodyLotionTextMobile'>
        <img src={BodyLotionTextMobile} alt='text' />
        <a href='/body-lotions'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <div className='ProteinBarImage'>
        <div className='ProductBG2'>
          <img src={ProteinBarImage} alt='essence protein' />
        </div>
      </div>
      <div className='ProteinBarText'>
        <img src={ProteinBarText} alt='text' />
        <a href='/diet-foods'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <div className='ProteinBarTextMobile'>
        <img src={ProteinBarTextMobile} alt='text' />
        <a href='/diet-foods'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <img className='EssenceDarkbg' src={EssenceDarkbg} alt='essence logo' />
      <div className='FacewashImageContainer'>
        <div className='ProductBG3'>
          <img src={FacewashImage} alt='essence facewash' />
        </div>
      </div>
      <div className='FacewashText'>
        <img src={FacewashText} alt='text' />
        <a href='/face-wash'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <div className='FacewashTextMobile'>
        <img src={FacewashTextMobile} alt='text' />
        <a href='/face-wash'>
          <button>
            See More&nbsp;&nbsp;<i class='fas fa-chevron-right'></i>
          </button>
        </a>
      </div>
      <img src={HomeWhite4} className='HomeWhite4' alt='bg' />
      <img src={DottedCurveDivider} className='DottedCurveDivider' alt='divider' />
      <div className='bgDiv3'></div>
      <div className='newsletterBG'>
        <img src={newsletterBG} alt='bg' />
        <NewsletterSignUpForm />
      </div>
      <div className='newsletterBGMobile'>
        <img src={newsletterBGMobile} alt='bg' />
        <div>
          <NewsletterSignUpForm />
        </div>
      </div>
      {/* <div className='customerReviews'>
        <img src={custReviewsBody} alt='text' />
      </div> */}
      <div className='homeFooter'>
        <Footer />
      </div>
    </main>
  );
}
