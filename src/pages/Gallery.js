import React from 'react';
import Layout from './../components/Layout';
import '../styles/Gallery.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';import { Grid, Card, CardContent, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import picture1 from '../images/picture1234.jpeg';
import picture2 from '../images/img910jpg.jpg';
import picture3 from '../images/img5.jpg';
import picture4 from '../images/img4.jpg';
import picture5 from '../images/img3.jpg';
import picture6 from '../images/img12.jpg';
import picture7 from '../images/img6.jpg';

const Gallery = () => {
  return (
    <Layout>
           <Container maxWidth="lg">
       <Typography>
          <h3 className="event-page"> GALLERY </h3>
            <p className="second-p"> Some Photos From Our Office...
            </p>
       </Typography>


        <Grid container spacing={1} style={{marginTop: "20px"}}>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture1} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture2} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture3} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture4} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500}} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture5} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture6} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3} ms={3}>
            <Card sx={{ maxWidth: 500 }} style={{ marginBottom: "10px" }}>
              <CardActionArea>
                <CardMedia component="img" image={picture7} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          </Grid>
          </Container>

         <div className="arrow">
           <Link to="/career"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
           <Link to="/contact"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
        </div>
    </Layout>
  )
}

export default Gallery;
