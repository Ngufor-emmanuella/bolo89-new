import React from 'react'
import Layout from './../components/Layout';
import { Link } from "react-router-dom";
import '../styles/Blog.css';
import office1b from '../images/office1b.jpg';
import img11 from '../images/img11.jpg';
import img4 from '../images/img4.jpg';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const Blog = () => {
  return (
    <Layout>
       <div className="blog-page">
        <h3> BLOG </h3>
        <p> Checkout our Blog post ...</p>

        <div className="blog-row">

            <div className="blog-div" >
              <img className="blog-image" src={office1b} alt="bolo blog post"/>
              <div className="blog-header">
                <Link to="/" className="blog-four"> 
                  <h4>Grid: A Powerful Tool for Web Layout Design</h4>
                </Link>
                </div>
            </div>

            <div className="blog-div">
            <img className="blog-image" src={img11} alt="bolo blog post"/>
            <div className="blog-header">
              <Link to="/" className="blog-four"> 
                  <h4>Grid: A Powerful Tool for Web Layout Design</h4>
              </Link>
              </div>
            </div>

            <div className="blog-div">
            <img className="blog-image" src={img4} alt="bolo blog post"/>
            <div className="blog-header">
            <Link to="/" className="blog-four"> 
                  <h4>Grid: A Powerful Tool for Web Layout Design</h4>
              </Link>
              </div>
            </div>

            </div>

            <div className="arrow">
             <Link to="/services"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
             <Link to="/events"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
            </div>

        </div>

    </Layout>
    
  )
}

export default Blog;
