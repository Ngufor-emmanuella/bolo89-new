import React from 'react';
import Layout from './../components/Layout';
import { Link } from "react-router-dom";
import palour from "../images/parlor.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <Layout className="home">
      
      <div className="homing" >
        <div className="headerContainer">
          <h1>A workspace for all types of <span>business </span> </h1>
          <h2>Our coworking spaces let you choose to work with others in an open-plan area, a shared office or private office.</h2>
          
          <div className="get-started">
            <Link to="/about">
              <button>GET STARTED</button>
            </Link>
            <Link to="/menu"  className="secButton" >
              <button>BOOK AN OFFICE</button>
            </Link>
          </div> 
        </div>

        <div className="parlour">
          <img className="palimg" src={palour} alt="Bolo-home"/>
        </div>
      </div>

    </Layout>
  )
}

export default Home;
