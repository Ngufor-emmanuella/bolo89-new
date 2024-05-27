import React from 'react'
import Layout from './../components/Layout';
import { Link } from "react-router-dom";
import '../styles/Blog.css';
import office1b from '../images/office1b.jpg';
import img11 from '../images/img11.jpg';
import img4 from '../images/img4.jpg';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';import { Grid, Card, CardContent, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Blog = () => {
  return (
    <Layout>

  <Container maxWidth="lg">
        <Typography>
          <h3> BLOG </h3>
          <p> Checkout our Blog post ...</p>
        </Typography>
        
        <Grid container spacing={5} style={{marginTop: "20px"}} className="two">

              <Grid item xs={12} sm={6} ms={6}>
                <Card sx={{ maxWidth: 545 }} style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="350" image={img4} alt="bolo spaces" style={{ borderRadius: "3px" }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Link to="/" className="blog-four">
                          <h4 >Grid: A Powerful Tool for Web Layout Design</h4>
                        </Link>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6}>
                <Card sx={{ maxWidth: 545 }} style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="350" image={img11} alt="bolo spaces" style={{ borderRadius: "3px" }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Link to="/" className="blog-four">
                          <h4 >Elevate Your Work Experience at BOLO89: Douala's Premier Coworking Space</h4>
                        </Link>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6}>
                <Card sx={{ maxWidth: 545 }} style={{ padding: "10px", marginBottom: "30px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="350" image={office1b} alt="bolo spaces" style={{ borderRadius: "3px" }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <Link to="/" className="blog-four">
                          <h4 >Grid: A Powerful Tool for Web Layout Design</h4>
                        </Link>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
        </Grid>
       </Container>

            <div className="arrow">
             <Link to="/services"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
             <Link to="/events"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
            </div>

    </Layout>
    
  )
}

export default Blog;
