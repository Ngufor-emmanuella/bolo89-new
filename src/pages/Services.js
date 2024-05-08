import React from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import '../styles/Services.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import office1b from '../images/office1b.jpg';
import office2 from '../images/office2.jpg';
import office3 from '../images/office3.jpg';
import office4 from '../images/office4.jpg';
import office6 from '../images/office6.jpg';
import office7 from '../images/office7.jpg';
import office1 from '../images/office1.jpg';

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

       <Container maxWidth="lg">
        
        <Grid container spacing={5} style={{marginTop: "20px"}}>
         
            <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office1b} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>Open Desk Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>7500 XAF / Half Day Pass</p>

                      <h3>Open Desk Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>10,000 XAF /Full Day Pass </p>

                      <h3>Open Desk Monthly</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >100,000 XAF/month. This plan renews automatically</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office2} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>Semi-Private Desk Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>10,000 XAF /Half Day Pass (no monthly fee)</p>

                      <h3>Semi-Private Desk Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >15,000 XAF /Full Day Pass (no monthly fee)</p>

                      <h3>Semi-Private Desk Monthly</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >125,000 XAF /month. This plan renews automatically.</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office3} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>Shared Private Office - Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>15,000 XAF /Half Day Pass </p>

                      <h3>Shared Private Office - Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >20,000 XAF /Full Day pass .</p>

                      <h3> Shared Private Office - Monthly</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >150,000 XAF /month. This plan renews automatically.</p>

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>


              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px", height:"72vh"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office4} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>Private Office Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>20,000 XAF /Full Day Pass .</p>

                      <h3>Private Office Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >30,000 XAF /Full Day Pass .</p>

                      <h3>Private Office Monthly</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >250,000 XAF /month. This plan renews automatically.</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office1} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                    <h3>Large Mix-Use Space Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >100,000 XAF /Half Day Pass .</p>

                      <h3>Large Mix-Use Space Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >200,000 XAF /Full Day Pass (no monthly fee).</p>

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office6} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h3>Executive Conference Room (Dallas) Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>75,000 XAF /Half Day Pass (no monthly fee).</p>

                      <h3>Executive Conference Room (Dallas) Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>100,000 XAF /Full Day Pass (no monthly fee).</p>

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>

              <Grid item xs={12} sm={6} ms={6} >
              <Card sx={{maxWidth: 645 }} style={{padding:"10px", marginBottom:"30px"}}>
                <CardActionArea>
                  <CardMedia component="img" height="350" image={office7} alt="bolo spaces" style={{borderRadius: "3px"}} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                    <h3>Private Meeting Space Half Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}}>50,000 XAF /Half Day Pass (no monthly fee).</p>

                      <h3>Private Meeting Space Full Day Pass</h3>
                      <p style={{color: "#625b4b", fontSize: "19px"}} >75,000 XAF /Full Day Pass (no monthly fee).</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{border: "2px solid #cda45e", borderRadius: "20px", padding: "10px", marginLeft: "7%", color: "#625b4b"}} size="small" href="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform" target="_blank">
                  See Plan Details & Sign Up
                  </Button>
                </CardActions>
              </Card>
              </Grid>
          
        </Grid>
       </Container>

      <div className="backarrow">
        <Link to="/about"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
        <Link to="/blog"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
      </div>

      </div>
    </Layout>
  )
}

export default Services;
