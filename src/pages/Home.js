import React from 'react';
import Layout from './../components/Layout';
import { Link } from "react-router-dom";
import Bolo from "../images/bolo89-11.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <Layout>
      
      <div className="home" style={{ backgroundImage: `url(${Bolo})` }} >
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
      </div>

    </Layout>
  )
}

export default Home;
