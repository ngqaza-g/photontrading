import React, { Fragment } from 'react'



const Footer = () => {
    
 const yearNow=new Date().getFullYear()
    return (
        <Fragment>
     <div className="footer">
        <div className="subscribe row">
            <div className="subscribewords col-lg-5  "> <i className="far fa-paper-plane"></i>Signup for Our newsletter and be the first
                   to know about our<br/> latest promotions
            
               
            </div>
            <div className="subscribeInput col-lg-5">
                <div className="input-group inputform ">
                    <input type="text" className="form-control" placeholder="Enter your email"  />
                    <button className="btn subscribebtn btn-secondary" type="button" >subscribe</button>
                  </div>
            </div>
        </div>
            <div className="footermain row">
                <div className=" col-lg-3">
                    <div className="mainCols">



                    <p className="footer-call"> <img alt="headsets" className="footer-headsets" src="https://res.cloudinary.com/photontrading/image/upload/v1629842445/products/5288414_earphone_earphones_headphone_headphones_headset_icon_1_lrynf0.svg" id="headsets0001"/>+263 775 639338</p>
                    <p><i className="far footericon3 fa-lg fa-envelope"></i>hello@photontrading.co.zw</p>
                    </div>
                <div className="mainCols02 ">
                <i className="fab footericon2 fa-lg fa-facebook-f"></i>
                <i className="fab  footericon2 fa-lg fa-twitter"></i>
                <i className="fab footericon2 fa-lg fa-instagram"></i>
                </div>
                </div>
               
               
               
               

                   <div className="mainCols col-lg-3">
                    
                    <ul className="footerancher" id="f201">
                        <li className="footerheader">About</li>
                        <li><a className="footerWords" href="/about">Payment Methods</a></li>
                        <li><a className="footerWords" href="/about">Deliveries</a></li>
                        <li><a className="footerWords" href="/about">Gift Someone</a></li>
                        <li><a className="footerWords" href="/about">Discount Cards</a></li>
                        <li><a className="footerWords" href="/about">Join whatsApp Group</a></li>
                    </ul>
                    
                    
                   </div>

                   <div className="mainCols col-lg-3">
                   
                    <ul className="footerancher">
                        <li className="footerheader"><strong>Legal Information</strong></li>
                        <li><a className="footerWords" href="/legalinfo">Cookie Policy</a></li>
                        <li><a className="footerWords" href="/legalinfo">Privacy Policy</a></li>
                        <li><a className="footerWords" href="/legalinfo">Terms and Conditions</a></li>
                        <li><a className="footerWords" href="/legalinfo">Returns & Refunds</a></li>
                        
                    </ul>
                    
                   </div>

                   <div className="mainCols col-lg-3">
                    
                    <ul className="footerancher">
                        <li className="footerheader">Navigate Faster</li>
                       <li><a className="footerWords" href="/accesscontrol">Access Control</a></li> 
                       <li><a className="footerWords" href="/intercoms">Intercoms</a></li> 
                       <li><a className="footerWords" href="/alarmsandcctv">CCTV</a></li> 
                     <li><a className="footerWords" href="/solar">Solar Systems</a></li>
                       <li><a className="footerWords" href="/SlidingGateMotors">Gate Motors</a></li> 
                    </ul>
                   
                   </div>

            </div>
            <div className="footerbottom flex-row flex d-flex row" id="footerbottom">
                <div  className="footericonenclosure col-lg-9  inline-block">
                <div   className="footericon">
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1627939414/products2/icons/zimswitch_qqox2i.jpg" alt="#"/>
                </div>
                <div  className="footericon" >
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1628189400/products2/icons/maestro-2-logo-png-transparent_xnlboq.png" alt="#"/>
                </div>
                <div  className="footericon" >
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1627939407/products2/icons/visa_s9bp9s.png" alt="#"/>
                </div>
                <div className="footericon" >
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1628189583/products2/icons/paypal-logo-png-transparent_ehd2yt.png" alt="#"/>
                </div>
                <div  className="footericon">
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1628188937/products2/icons/1280px-MasterCard_Logo.svg_xgybh7.png" alt="#"/>
                </div>
                <div  className="footericon">
                    <img src="https://res.cloudinary.com/photontrading/image/upload/v1627939510/products2/icons/83707732_ykowmo.png" alt="#"/>
                </div>
           </div>
            <div className="footerbrand col-lg-3">
              <div className="fbrandname">Photon<i className="far fa-copyright"></i>{yearNow}</div>
              <div id='siteBy'>Site by <a className='anchor01' href='https://wwww.thecodebrewery.co.zw' target="_blank" rel="noreferrer">theCodeBrewery</a></div>

            </div>
            

            </div>
        </div>



        </Fragment>
    )
}

export default Footer
