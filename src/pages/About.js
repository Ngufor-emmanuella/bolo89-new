import React from 'react'
import Layout from './../components/Layout';
import Growimage from '../images/office1.jpg';
import { Link } from "react-router-dom";
import '../styles/About.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const About = () => {
  return (
    <Layout>
      <div className="homeabout" style={{ backgroundColor: "#f0e2e2" }}>

        <div className="side"> 

        <div className="stand-for">
          <h3>What does the 89 stand for?</h3>
          <p className="change-black">
              89 is significant for our standard weekday hours of operation – 8am – 9pm (mind you our members get 24/7
              access!).
              As digital nomads, we needed a space we could work out of that catered to our need for non-traditional
              work hours.
              We had a hard time finding one in Douala, so we did what any normal thinking person would – opened up our
              own!
            </p>
            <h3>Our Goal.</h3>
            <p className="change-black">
              BOLO89 exists to provide high quality, flexible spaces to digital nomads, entrepreneurs, small businesses,
              and business travelers, allowing our members to grow their companies and exceed their business and
              professional goals.
              We provide a unique set of amenities and benefits that support business growth and professional
              development.
            </p>
            <h3>Our vision.</h3>
            <p className="change-black vision">
              Our vision is to provide upscale, flexible workspaces in every major city in Africa.
              Whether you’re an established enterprise or a growing startup, discover spaces that inspire your most
              impactful work.
            </p>

        </div>

        <div className="grow-image">
          <img src={Growimage} alt="Bolo89 work space" />

        </div>

        </div>
        {/* second section */}

        <div className="why-us">

        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose BOLO89</p>
        </div>

        <div className="row">
          <div className="first-row">
            <div className="box">
              <span>01</span>
              <h4>Premium Amenities</h4>
               <p>
                Our staff provide boutique-style hospitality daily and coordinate the day-to-day operations that
                advocate for your business success.
              </p>
              <ul>
                <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem'}} /> Complimentary Coffee, Tea and Water</li>
                <li> <CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem'}} /> Boutique, hotel lobby-like lounge area.</li>
                <li> <CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }} /> Fully furnished reception areas.</li>
                <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }}  /> Complimentary High Speed Internet</li>
              </ul>
            </div>
          </div>
          
          <div className="first-row">
            <div className="box">
              <span>02</span>
              <h4>Reliability</h4>
              <p>
                We get it. Reliability is critical. Our goal is to provide a solution so there are no interruptions in
                your work day or critical meetings.
              </p>
              <ul>
                <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }} /> Backup Generator.</li>
                <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }} /> 24/7 Member Access.</li>
                <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }} /> Security Guard on Duty 24/7 and water reservoir.</li>
            </ul>
            </div>
            </div>
            
            <div className="first-row">
              <div className="box">
                <span>03</span>
                <h4>Member Benefits</h4>
                <p>
                  Our business is built for and by our members. This is why we are dedicated to keeping you at the center
                  of all we do. It’s the little things that make all the difference!
                </p>
                <ul>
                  <li> <CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem', position: 'relative', top: '0.5rem' }} /> Free Access to Events.</li>
                  <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem',  position: 'relative', top: '0.5rem' }} /> Conference Room Hours Included.</li>
                  <li><CheckCircleOutlineIcon style={{ color: '#cda45e', fontSize: '2rem',  position: 'relative', top: '0.5rem' }} /> Discounted Space Rentals.</li>
                </ul>
            </div>
          </div>

        </div>


        </div>

       
          <div className="backarrow">
            <Link to="/"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
            <Link to="/services"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
          </div>
    
      </div>
    </Layout>
  )
}

export default About;
