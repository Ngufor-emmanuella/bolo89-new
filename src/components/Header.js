import React, {useState} from 'react';
import { Box, AppBar, Typography,Toolbar, IconButton, Drawer, Divider } from '@mui/material';
import { NavLink }from 'react-router-dom';
import './../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Log from '../images/bolo-white.png';
import { alpha } from '@mui/system';

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
                <li>
                  <NavLink to={"/Uploadresume"}> Upload Resume </NavLink>
                </li>

                <br></br>
                <br></br>

                <li className="lastlist">
                  <NavLink to={"/bookoffice"}> BOOK AN OFFICE </NavLink>
                </li>

              </ul>
    </Box>
  );
  return (
    <div>
      
      <Box>
      
        <AppBar component={"nav"} sx={{ bgcolor: alpha('#000000', 0.7), borderBottom: 'rgba(12, 11, 9, 0.6)'}}>
          <Toolbar>

          <Typography color={"white"} varient="h5" component="div" sx={{ flexGrow: 1}}>
            <NavLink to={"/"}>
             <img src={Log} alt="logo" height={"40"} />
           </NavLink>
          </Typography>
            
            <IconButton InputLabelProps={{ className: "menu-icon"}} aria-label="open drawer" edge="start" sx={{
              ml:2, display: { sm: "none"},
            }}
            onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={ {display: { xs: "none", sm: "block" }} } >

            <ul style={{ display: "flex", listStyleType: "none", marginLeft: '1rem', marginRight: '1rem'}}>
              <li> (+237) 652 921 000 | 693 339 340 </li>
              <li> Mon - Fri 8am - 9pm | Sat. 10am - 6pm </li>
            </ul>
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
              

                <li>
                  <NavLink to={"/Uploadresume"}> Upload Resume </NavLink>
                </li>
                

                <li className="lastlist">
                  <NavLink to={"/bookoffice"}> BOOK AN OFFICE </NavLink>
                </li>

              </ul>

            </Box>
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
