import React from 'react';
import Layout from './../components/Layout';
import '../styles/Events.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';import { Grid, Card, CardContent, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";
import firstdevx from '../images/first-devx.jpeg';
import event from '../images/event.jpeg';
import seconddevx from '../images/second-devx.jpeg';
import thirddevx from '../images/third-devx.jpeg';
import bitcoin from '../images/bit-coin.jpeg'


const Events = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
       <Typography>
          <h3 className="event-page"> EVENTS </h3>
            <p className="first-p">  We are open for events, Please reach out to  reserve a spot...</p>

            <h2 className="sec-header">EVENTS HELD AT BOLO89 </h2>
            <p className="second-p"> Let's Talk ,<br></br>
              <span> A conversation held by brilliant speakers</span>
            </p>
       </Typography>


        <Grid container spacing={5} style={{marginTop: "20px"}}>

          <Grid item xs={12} sm={4} ms={4}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
              <CardActionArea>
                <CardMedia component="img" image={firstdevx} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>Backend Brilliance and Server Side Development</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} ms={4}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
              <CardActionArea>
                <CardMedia component="img" image={bitcoin} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>Unlocking Bitcoin's Full Potential</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} ms={4}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
              <CardActionArea>
                <CardMedia component="img" image={event} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>A Conversation About Women Entrepreneurs And Development Barriers To Success</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} ms={4}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
              <CardActionArea>
                <CardMedia component="img" image={seconddevx} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>Devops Dynamics: Automation And Collaboration</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} ms={4}>
            <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px" }}>
              <CardActionArea>
                <CardMedia component="img" image={thirddevx} alt="bolo spaces" style={{ borderRadius: "3px", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>Exploring Thrends And Innovation Of Mobile Development</h4>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          </Grid>
          </Container>

         <div className="arrow">
           <Link to="/blog"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
           <Link to="/career"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '3vw'}} /></Link>
        </div>
    </Layout>
  )
}

export default Events;
