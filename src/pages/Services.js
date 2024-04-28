import React from 'react';
import Layout from '../components/Layout';
// import Growimage from '../images/office1.jpg';
import { Link } from "react-router-dom";
import '../styles/Services.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import office from '../images/office1b.jpg';
import office2 from '../images/office1b.jpg';
import office3 from '../images/office1b.jpg';
import office4 from '../images/office1b.jpg';
import office5 from '../images/office1b.jpg';
import office6 from '../images/office1b.jpg';
import office7 from '../images/office1b.jpg';


const Services = () => {
  return (
    <Layout>
      <div className="services">

      <div className="service-title">
        <h2>Services</h2>
        <p>Plans & Pricing </p>
      </div>
      
            <ul className="menu-filters">
              <li>All</li>
              <li>Semi Private work spaces</li>
              <li>Private offices</li>
              <li>Shared Private offices</li>
              <li>Mixed Rooms</li>
              <li>Large Mix-Use Space</li>
              <li>Open Desk</li>
            </ul>
       <br></br>
       <br></br>

      <div className="columns">

        <div className="service-row">
          <img src={office} alt="open area" />
          <h2>Open Desk Half Day Pass</h2>
          <p> 7,500 XAF /Half Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        </div>
        
        <div className="service-row">
        <img src={office} alt="open area" />
        <h2>Open Desk Full Day Pass</h2>
          <p>  10,000 XAF /Full Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        
        </div>
          
        <div className="service-row">
          <img src={office} alt="open area" /> 
          <h2>Open Desk Monthly</h2>
          <p> 100,000 XAF/month. This plan renews automatically.</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        </div>

        <div className="service-row">
          <img src={office2} alt="semi-private area" />
          <h2>Semi-Private Desk Half Day Pass</h2>
          <p> 10,000 XAF /Half Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        </div>

        <div className="service-row">
          <img src={office2} alt="semi-private area" />
          <h2>Semi-Private Desk Full Day Pass</h2>
          <p>  15,000 XAF /Full Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office2} alt="semi-private area" />
          <h2>Semi-Private Desk Monthly</h2>
          <p> 125,000 XAF /month. This plan renews automatically.</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>  
        </div>

        <div className="service-row">
          <img src={office3} alt="shared-private area" />
          <h2>Shared Private Office - Half Day Pass</h2>
          <p>   15,000 XAF /Half Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office3} alt="shared-private area" /> 
          <h2>Shared Private Office - Full Day Pass</h2>
          <p> 20,000 XAF /Full Day pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office3} alt="shared-private area" /> 
          <h2>Shared Private Office - Monthly</h2>
          <p> 150,000 XAF /month. This plan renews automatically.</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office4} alt="private-office area" /> 
          <h2>Private Office Half Day Pass</h2>
          <p> 20,000 XAF /Half Day Pass (no monthly fee)</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office5} alt="private-office area" /> 
          <h2>Private Office Full Day Pass</h2>
          <p> 30,000 XAF /Full Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office4} alt="private-office area" /> 
          <h2>Private Office Monthly</h2>
          <p> 250,000 XAF /month. This plan renews automatically.</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office6} alt="private-office area" /> 
          <h2> Large Mix-Use Space Half Day Pass </h2>
          <p>  100,000 XAF /Half Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        </div>

        <div className="service-row">
          <img src={office6} alt="private-office area" />  
          <h2>Large Mix-Use Space Full Day Pass</h2>
          <p> 200,000 XAF /Full Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>
        </div>

        <div className="service-row">
          <img src={office7} alt="private-office area" /> 
          <h2>Executive Conference Room (Dallas) Half Day Pass</h2>
          <p>  75,000 XAF /Half Day Pass (no monthly fee). </p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div> 
        </div>

        <div className="service-row">
          <img src={office7} alt="private-office area" />
          <h2>Executive Conference Room (Dallas) Full Day Pass</h2>
          <p>  100,000 XAF /Full Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>  
        </div>

        <div className="service-row">
          <img src={office7} alt="private-office area" />
          <h2>Private Meeting Space Full Day Pass</h2>
          <p> 75,000 XAF /Full Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>  
        </div>

        <div className="service-row">
          <img src={office7} alt="private-office area" />
          <h2>Private Meeting Space Half Day Pass</h2>
          <p>  50,000 XAF /Half Day Pass (no monthly fee).</p>
          <div class="btns">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"
                  target="_blank" class="btn-book animated fadeInUp">See Plan Details & Sign Up</Link>
          </div>  
        </div>


      </div>


      <div className="backarrow">
        <Link to="/about"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
        <Link to="/blog"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
      </div>


      </div>
    </Layout>
  )
}

export default Services;
