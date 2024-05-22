import React, {useState} from 'react';
import { Box, AppBar, Typography,Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import PhoneIphoneTwoToneIcon from '@mui/icons-material/PhoneIphoneTwoTone';
import { NavLink }from 'react-router-dom';
import './../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Log from '../images/bolo-white.png';
import { alpha } from '@mui/system';
import { Link } from "react-router-dom";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //andle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };

  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
                <Typography color={"white"} varient="h5" component="div" sx={{ flexGrow: 1, my: 2 }}>

                
                <NavLink to={"/"}>
                  <img src={Log} alt="logo" height={"40"} />
                </NavLink>
            </Typography>
            <Divider />

              <ul className="mobile-navigation">
                <li>
                  <NavLink activeClassName="active" to={"/"}> Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}> Services </NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}> Blog </NavLink>
                </li>
                <li>
                  <NavLink to={"/events"}> Events </NavLink>
                </li>
                <li>
                  <NavLink to={"/career"}> Career </NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"}> Gallery </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact </NavLink>
                </li>
                
                {/* <li>
                  <NavLink to={"/Uploadresume"}> Upload Resume </NavLink>
                </li> */}

                <br></br>
                <br></br>

                <li className="lastlist">
                  <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"> BOOK AN OFFICE </NavLink>
                </li>

              </ul>
    </Box>
  );
  return (
    <div>
      
      <Box>
      
        <AppBar component={"nav"} sx={{ bgcolor: alpha('#000000', 0.7), borderBottom: 'rgba(12, 11, 9, 0.6)', width: "100%", height: "auto"}}>
          <Toolbar>

          <Typography color={"white"} varient="h5" component="div" sx={{ flexGrow: 1}}>

            <Box sx={ {display: { xs: "flex", sm: "flex", justifyContent: "space-between" }} }>
          <ul style={{ display: "flex", listStyleType: "none", marginLeft: '1rem', fontSize: "15px"}}>
              <li style={{marginRight: "1rem"}}> <WatchLaterTwoToneIcon style={{ color: "#cca053",  fontSize: "1.3rem", borderRadius: "1px", position: "relative", top: "0.2rem"}}/> <span>(+237) 652 921 000 | 693 339 340 </span></li>
              <li> <PhoneIphoneTwoToneIcon style={{ color: "#cca053",  fontSize: "1.3rem", borderRadius: "1px", position: "relative", top: "0.2rem" }}/> <span>Mon - Fri 8am - 9pm | Sat. 10am - 6pm</span> </li>
          </ul>

          <ul style={{ display: "flex", listStyleType: "none"}} className="mobletime">
              <li style={{ marginRight: "1rem"}}>
                <NavLink to={"/"}style={{textDecoration: "none", fontSize: "15px", color: "#cda45e"}}>En</NavLink>
              </li>
              <li>
              <NavLink to={"/"}style={{color: "#fff", marginRight: "5rem", textDecoration: "none", fontSize: "15px"}}>Fr</NavLink>
              </li>
            </ul>
            </Box>
            
            <IconButton InputLabelProps={{ className: "menu-icon"}} aria-label="open drawer" edge="start" sx={{
              ml:2, display: { sm: "none"},
            }} onClick={handleDrawerToggle} style={{ position: "relative", left: "18rem"}}>
              <MenuIcon />
            </IconButton>

            <Box sx={ {display: { xs: "none", sm: "flex", justifyContent: "space-between" }} } >

            <NavLink to={"/"} >
              <img src={Log} alt="logo" height={"40"} style={{marginLeft: "1rem"}}/>
             </NavLink>

              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}> Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}> About</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}> Services </NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}> Blog </NavLink>
                </li>
                <li>
                  <NavLink to={"/events"}> Events </NavLink>
                </li>
                <li>
                  <NavLink to={"/career"}> Career </NavLink>
                </li>
                <li>
                  <NavLink to={"/gallery"}> Gallery </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}> Contact </NavLink>
                </li>
              

                {/* <li>
                  <NavLink to={"/Uploadresume"}> Upload Resume </NavLink>
                </li> */}
                

                <li className="lastlist">
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSftyEiEOoA8ERh_k9F29VVXQXwXrxJm3k06QaDw6_bHxTiq3Q/viewform"  target="_blank" rel="noopener noreferrer"> BOOK AN OFFICE </Link>
                </li>

              </ul>

            </Box>
            </Typography>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none"}, "& .MuiDrawer-paper": {
            boxSizing: "border-box", width: "240px",

          },
        }}
          >
            {drawer}

          </Drawer>
        </Box>

        <Box>
          <Toolbar />
        </Box>

      </Box>
      
      
    </div>
  );
};

export default Header;
