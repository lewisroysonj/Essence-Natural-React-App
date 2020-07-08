import React from 'react';
import './Footer.css';

import footerBG from './Footer bg.svg';
import EssenceDarkbg from './Essence Dark bg.svg';


export default class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div className="footerDesktop">
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
                       <li><i class="fab fa-instagram"></i></li>
                       <li><i class="fab fa-facebook"></i></li>
                       <li><i class="fab fa-linkedin-in"></i></li>
                       <li><i class="fab fa-twitter"></i></li>
                     </ul>
                </div>
                <h4 className="copyrightInfo" >&copy; Essence 2020 | Designed by Royson Lewis</h4>
                <img className="footerBG" src={footerBG} alt="bg" />
                <div className="bottomFooterBG" ></div>
              
            </div>
             <div className="footerMobile">
                 <div className="footerMobileBG">
                     <div className="footerColumn">
                       <img className="EssenceDarkbgfooterMobile" src={EssenceDarkbg} alt="essence logo" />
                       
                       <div className="footerSocialLinksMobile">
                          <h1>Connect with us</h1>
                          <ul>
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-linkedin-in"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                          </ul>
                       </div>
                       <p>(415)007-7780</p>
                       <p>product.natural@essence.com</p>
                       <p>5th street Olive cross</p>
                       <p>Santiago Chile</p>
                       <div className="bottomFooterMobile">
                           <h2>&copy;Essence 2020 | Designed by Royson Lewis</h2>
                       </div>
                    </div>


                  </div>
            
           
             </div>
         </footer>
        );
    }
}