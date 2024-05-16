import React from 'react';
import logo from '../images/bolo-white.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    
    <div className="footer">
       <hr style={{color: "#000", borderBottom: "1px solid #000"}}></hr>

        <div className="mainfooter">
        
          <div>
            <img src={logo} alt="bolo89 logo" style={{background: "#000", marginLeft: "1rem", padding: "15px", marginBottom: "1.5rem"}}/>

            <p>
                    <strong>1280 Rue de Deido-Bonanjo</strong>
                    <br></br>
                    <br></br>
                    Deido, Douala <br></br>
                    Between Total Bonateki and Pharmacy Akwa Nord<br></br><br></br>
                    <strong>Phone:</strong> (+237) 652 921 000<br></br><br></br>
                    <strong>Email:</strong> info@bolo89.com<br></br><br></br>
            </p>
            <ul className="icon-list">
              <li><Link to="https://twitter.com/bolo89official"><XIcon style={{ backgroundColor: "black", padding: "0.2rem", borderRadius: "20px"}}/></Link></li>
              <li><Link to="https://www.facebook.com/Bolo89-100953628907693"><FacebookIcon style={{ backgroundColor: "black", padding: "0.2rem", borderRadius: "20px"}}/></Link></li>
              <li><Link to="https://www.instagram.com/bolo89official"><InstagramIcon style={{ backgroundColor: "black", padding: "0.2rem", borderRadius: "20px"}}/></Link></li>
              <li><Link to="https://www.linkedin.com/company/bolo89"><LinkedInIcon style={{ backgroundColor: "black", padding: "0.2rem", borderRadius: "20px"}}/></Link></li>
            </ul>
          </div>

          <div className="footer-links">
                <h4>Useful Links</h4>
                <ul className="footer-list">
                  <li> <Link to="/" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Home</span></Link></li>
                  <li> <Link to="/about" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">About us</span></Link></li>
                  <li> <Link to="/services" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Services</span></Link></li>
                  <li> <Link to="/#" className="li-tag"> < ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Terms of service</span></Link></li>
                  <li> <Link to="/#" className="li-tag"> < ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa"> PrivLinkcy policy</span></Link></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Our Services</h4>
                <ul className="footer-list">
                  <li> <Link to="/#" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Private Office</span></Link></li>
                  <li> <Link to="/#" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Semi Private Office</span></Link></li>
                  <li> <Link to="/#" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Open Space</span></Link></li>
                  <li> <Link to="/#" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa">Conference Room</span></Link></li>
                  <li> <Link to="/#" className="li-tag">< ChevronRightIcon style={{color: "#d8a651"}}/><span className="spa">Event Space</span></Link></li>
                </ul>
            </div>

            <div class="footer-newsletter">
                <Link to="/blog" style={{textDecoration: "none"}} > <h4>< ChevronRightIcon style={{color: "#d8a651"}}/> <span className="spa"> Our Blog</span></h4> </Link>
                {/* <form action="" method="post">
                  <input type="email" name="email"><input type="submit" value="Subscribe">
                </form> */}
            </div>

        </div>

        <hr style={{color: "#000", borderBottom: "1px solid #000", marginTop: "1rem", marginBottom: "1rem"}}></hr> 

        <div class="copyright" style={{display: "flex", color: "#2b1c03", justifyContent: "center", alignItems: "center", paddingBottom: "2rem", fontSize: "15px"}}>
              &copy; Copyright <strong style={{paddingLeft: "0.5rem"}}><span>BOLO89</span></strong>. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer;
