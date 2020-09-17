/** @format */

import React from "react";
import "./Footer.css";

import footerBG from "./Footer bg.svg";
import EssenceDarkbg from "./Essence Dark bg.svg";
import FooterOverBG from "./footerOverBG.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="footerDesktop">
                <img src={FooterOverBG} alt="bg" className="footerOverBG" ></img> 
                <img className="EssenceDarkbgfooter" src={EssenceDarkbg} alt="essence logo" />
                <div className="companyAddress">
                <p>(415)007-7780</p>
                <p>product.natural@essence.com</p>
                <p>5th street Olive cross</p>
                <p>Santiago Chile</p>
                </div>
                
                <div className="footerSocialLinks">
                   <h1>Connect with us</h1>
                     <ul>
                       <li><i className="fab fa-instagram"></i></li>
                       <li><i className="fab fa-facebook"></i></li>
                       <li><i className="fab fa-linkedin-in"></i></li>
                       <li><i className="fab fa-twitter"></i></li>
                     </ul>
                </div>
                <h4 className="copyrightInfo" >&copy; Essence 2020 | Designed by Royson Lewis</h4>
                <img className="footerBG" src={footerBG} alt="bg" />
                <div className="bottomFooterBG" ></div>
              
            </div> */}
        <div className='footerDesktop'>
          <img src={FooterOverBG} alt='bg' className='footerOverBG'></img>
          <div className='footerContent'>
            <div className='footerColumn1'>
              <img className='essenceDarkLogoFooter' src={EssenceDarkbg} alt='Essence logo'></img>
              <div className='companyAddress'>
                <p>(415)007-7780</p>
                <p>product.natural@essence.com</p>
                <p>5th street Olive cross</p>
                <p>Santiago Chile</p>
              </div>
            </div>
            <div className='footerColumn2'>
              <h1>Connect with us</h1>
              <ul>
                <li>
                  <i className='fab fa-instagram'></i>
                </li>
                <li>
                  <i className='fab fa-facebook'></i>
                </li>
                <li>
                  <i className='fab fa-linkedin-in'></i>
                </li>
                <li>
                  <i className='fab fa-twitter'></i>
                </li>
              </ul>
            </div>
          </div>
          <h2 className='copyrightInfo'>&copy;Essence 2020 | Designed by Royson Lewis</h2>

          <img src={footerBG} className='footerUpperBG' alt='bg'></img>
        </div>

        <div className='footerMobile'>
          <div className='footerMobileBG'>
            <div className='footerColumn'>
              <img className='EssenceDarkbgfooterMobile' src={EssenceDarkbg} alt='essence logo' />

              <div className='footerSocialLinksMobile'>
                <h1>Connect with us</h1>
                <ul>
                  <li>
                    <i className='fab fa-instagram'></i>
                  </li>
                  <li>
                    <i className='fab fa-facebook'></i>
                  </li>
                  <li>
                    <i className='fab fa-linkedin-in'></i>
                  </li>
                  <li>
                    <i className='fab fa-twitter'></i>
                  </li>
                </ul>
              </div>
              <p>(415)007-7780</p>
              <p>product.natural@essence.com</p>
              <p>5th street Olive cross</p>
              <p>Santiago Chile</p>
              <div className='bottomFooterMobile'>
                <h2>&copy;Essence 2020 | Designed by Royson Lewis</h2>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
