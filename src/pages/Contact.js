import React from 'react';
import Layout from '../components/Layout';
import { Grid, Card, CardContent, TextField, Button } from '@mui/material';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <Layout>
      <div className="contact-form"> 
       <div >
      <h4 className="sec-head">Contact</h4>
      <h1 className="first-head">Let's Talk</h1>

     
        <div className="put-up">
          <h3><PlaceTwoToneIcon style={{backgroundColor: "#cca053", color: "#8a8282",  fontSize: "2.2rem", borderRadius: "20px", padding: "3px"}} /> <span className="location">Location:</span></h3>
          <p className="paragraph">1280 RUE de Deido Bonanjo Deido, Douala
            Between Total Bonateki and Pharmacy Akwa Nord<br></br>
          </p>
        </div>

        <div  className="put-up">
          <h3> <WatchLaterTwoToneIcon style={{backgroundColor: "#cca053", color: "#8a8282",  fontSize: "2.2rem", borderRadius: "20px", padding: "6px"}} /><span className="location"> Open Hours:</span></h3>
          <p>Mon - Fri 8am - 9pm
            <br></br> Sat 10am - 6pm
          </p>
        </div>

        <div className="put-up">
          <h3> <EmailTwoToneIcon style={{backgroundColor: "#cca053", color: "#8a8282",  fontSize: "2.2rem", borderRadius: "20px", padding: "6px"}}/> <span className="location">Email:</span></h3>
          <p>info@bolo89.com</p>
        </div>

        <div className="put-up">
          <h3> <PhoneIphoneTwoToneIcon style={{backgroundColor: "#cca053", color: "#8a8282",  fontSize: "2.2rem", borderRadius: "20px", padding: "6px"}}/> <span className="location">Call:</span></h3>
          <p>(+237) 652 921 000 | 693 339 340 </p>
        </div>
      </div>

      
        <Card style={{ maxWidth: 950, padding: "20px 5px", marginTop: "8rem"}} className="cardup">
          <CardContent>
            <form>

            <Grid container spacing={1}>
              <Grid xs={12} sm={6}items>
                <TextField label="Your Name" placeholder="Your Name" fullWidth required/> 
              </Grid>

              <Grid xs={12} sm={6}items>
                <TextField type="email" label="Email" placeholder="Your Email" fullWidth required/> 
              </Grid>

              <Grid xs={12} items> 
                <TextField label="Subject" placeholder="Subject" fullWidth required/> 
              </Grid>

              <Grid xs={12} items > 
                <TextField placeholder="Message" multiline rows={5}fullWidth required /> 
              </Grid>

              <Grid xs={12} item>
                <Button type="submit" variant="contained" style={{backgroundColor: "#cda45e", color: "#fff", scrollPaddingRight: "20px", paddingLeft: "20px", borderRadius: "25px"}}>Send Message </Button>
              </Grid>

            </Grid>
            </form>
          </CardContent>
        </Card>
        </div>

        <div>
        <iframe title="Google Maps" style={{border:0, width: "100%" , height: 400}}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7449443471437!2d9.71352714956083!3d4.072302297024268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611368e72d95c3%3A0xef0b2944c7f3a14b!2sBOLO89!5e0!3m2!1sen!2scm!4v1629719220298!5m2!1sen!2scm"
          frameBorder="0" allowFullScreen>

          </iframe>
      </div>
      
    </Layout>

  )
}

export default Contact;
