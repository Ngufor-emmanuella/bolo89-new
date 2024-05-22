import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tiktok from '../images/tiktok.png';
import Location from '../images/location.png';


const Applyjobs = () => {
  return (
    <Layout>

        <div className="container-fluid align-items-center">

          {/* <img src="assets/img/frame.png" alt="hiring picture" className="img-fluid w-100 h-auto p-0 m-0"> */}

          <div className="container">

            <div className="col-8">
              
              <h3>About this role</h3>
              <h2> React Developer <span className="color-gray">(Freelance)</span></h2>
              {/* <h6><img src="assets/img/location.png" alt="location">.</h6> */}
              <h5>Job Summary: </h5>

              <p className="p-talented">We are hiring a skilled and experienced React Developer on behalf of one of our
                partners. This is a fantastic opportunity to join our team for a two-month contract. As a React
                  Developer, your primary responsibility will be to convert Figma designs into functional React JS
                  components. You will play a crucial role in developing the front-end user interface and 
                  integrating it with API endpoints provided by our partner's Cloud Architect.
                </p>
                
                <h5>Responsibilities: </h5>

                <ul className="qualification-list">
                  <li> Convert Figma designs into responsive and interactive React JS components. </li>
                  <li> Develop user interfaces that adhere to best practices, usability, and accessibility standards.</li>
                  <li> Collaborate with the Cloud Architect to integrate front-end components with API endpoints.</li>
                  <li> Implement API calls and handle responses to ensure seamless data flow between the front-end and back-end systems.</li>
                  <li> Troubleshoot and debug any issues related to the front-end development and ensure optimal performance.</li>
                  <li> Work closely with the project team, including designers and backend developers, to deliver high-quality and scalable solutions.</li>
                  <li> Participate in code reviews and provide constructive feedback to optimize code quality and maintainability.</li>
                  <li> Stay up-to-date with the latest trends and advancements in front-end development technologies.</li>

                  
                </ul>
                <br></br>
                <h5>Requirements: </h5>

                <ul className="qualification-list">
                  <li> Proven experience as a React Developer with expertise in developing user interfaces using React JS.</li>
                  <li>  Strong proficiency in converting Figma designs into React components, ensuring pixel-perfect implementation.
                    .</li>
                  <li> In-depth knowledge and experience with AWS services, including Amplify, Lambda, and REST API integration.
                  </li>
                  <li> Familiarity with front-end development tools, such as Webpack, Babel, and NPM/Yarn.</li>
                  <li>  Solid understanding of responsive web design principles and cross-browser compatibility.
                  </li>
                  <li> Proficient understanding of Git version control and collaborative development workflows.
                  </li>
                  <li> Excellent problem-solving skills and ability to debug and troubleshoot complex front-end issues.
                  </li>
                  <li> Strong communication and collaboration skills to work effectively within a team and meet project deadlines.
                  </li>
                  <li>  Attention to detail and a commitment to delivering high-quality code. </li>
                  <br></br>
                </ul>

                <h5>Contract Details: </h5>

                <ul className="qualification-list">
                  <li> Duration: 2 months (on-site at BOLO89) </li>
                  <li> Possibility to turn the contract into a full-time job based on performance and mutual agreement.</li>
                  <li> Payment will be made after the completion of each milestone.</li>
                  
                </ul>

                <p className="p-talented">If you are a talented Figma React Developer with experience in AWS and React JS, 
                  and you are looking for an exciting freelance opportunity, we encourage you to apply. Join our team
                  and contribute to the development of cutting-edge applications using the latest technologies.
                  <br></br>
                  To apply, please submit your resume, portfolio, and any relevant code samples showcasing your React
                    JS and Figma conversion expertise.
                </p>
                <br></br>

                <button class="apply-now"><a href="https://script.google.com/macros/s/AKfycbw3BKHQjSfkZ0-cMwtHjXvNbxj_-oU1TIr8IhK1NTZO6CQWKzdj6dSrGRWPX3qtW76E5A/exec">Apply Now</a></button>


            </div>

           {/* small box */}
            <div className="col-4">
              <button className="apply-now second-apply"><a href="https://script.google.com/macros/s/AKfycbw3BKHQjSfkZ0-cMwtHjXvNbxj_-oU1TIr8IhK1NTZO6CQWKzdj6dSrGRWPX3qtW76E5A/exec">Apply Now</a></button>

              <br></br>

              <hr className="apply-hr"></hr>

              <div className="social-media">
                <h4 className="social-h4" >Share this job</h4>

                <ul className="socialmedia-link">
                  <li><Link to="/https://www.facebook.com/Bolo89-100953628907693"><FacebookIcon alt="facebook" /></Link></li>
                  <li><Link to="/https://www.instagram.com/bolo89official">< XIcon alt="instagram" /></Link></li>
                  <li><Link to="/https://www.linkedin.com/company/bolo89"><InstagramIcon/></Link></li>
                  <li><Link to="/https://twitter.com/bolo89official"><LinkedInIcon alt="twitter" /></Link></li>
                  <li><Link to="/https://www.tiktok.com/bolo89official">< Tiktok /></Link></li>
                </ul>
              </div>

              <br></br>

              <hr className="apply-hr"></hr>

              <div className="other-jobs">
                <h4 className="social-h4">Other Jobs</h4>
                <p><bold className="color-red">Front end developer</bold> (Full time)</p>
                <h6><Location alt="location" />.</h6>
              
                <p><bold className="color-red">React Developer</bold> (Full time)</p>
                <h6><Location alt="location" />.</h6>
            
                <p><bold className="color-red">Graphic designer</bold> (Full time)</p>
                <h6><Location alt="location" />.</h6>
                <br></br>

              </div>
            </div>
              
          </div>
        </div>


    </Layout>
  )
}

export default Applyjobs;
