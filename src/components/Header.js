import React, {useState} from 'react';
import { Box, AppBar, Typography,Toolbar, IconButton, Drawer } from '@mui/material';
import { Link }from 'react-router-dom';
import './../styles/Header.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //andle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
                <Typography color={"white"} varient="h5" component="div" sx={{ flexGrow: 1}}>
            Bolo89 website new
            </Typography>

            {/* <Box sx={ {display: { xs: "none", sm: "block" }} } > */}
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}> Home</Link>
                </li>
                <li>
                  <Link to={"/about"}> About</Link>
                </li>
                <li>
                  <Link to={"/services"}> Services </Link>
                </li>
                <li>
                  <Link to={"/blog"}> Blog </Link>
                </li>
                <li>
                  <Link to={"/events"}> Events </Link>
                </li>
                <li>
                  <Link to={"/career"}> Career </Link>
                </li>
                <li>
                  <Link to={"/gallery"}> Gallery </Link>
                </li>
                <li>
                  <Link to={"/Uploadresume"}> Upload Resume </Link>
                </li>

                <li>
                  <Link to={"/menu"}> Menu</Link>
                </li>
                <li>
                  <Link to={"/pagenotfound"}> Page not found</Link>
                </li>
              </ul>

            {/* </Box> */}

    </Box>
  )
  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black"}}>
          <Toolbar>
            <IconButton color="#fff" aria-label="open drawer" edge="start" sx={{
              mr:5, display: { sm: "none"},
            }}>
              <MenuIcon />

            </IconButton>
          <Typography color={"white"} varient="h5" component="div" sx={{ flexGrow: 1}}>
            Bolo89 website new
            </Typography>

            <Box sx={ {display: { xs: "none", sm: "block" }} } >
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}> Home</Link>
                </li>
                <li>
                  <Link to={"/about"}> About</Link>
                </li>
                <li>
                  <Link to={"/services"}> Services </Link>
                </li>
                <li>
                  <Link to={"/blog"}> Blog </Link>
                </li>
                <li>
                  <Link to={"/events"}> Events </Link>
                </li>
                <li>
                  <Link to={"/career"}> Career </Link>
                </li>
                <li>
                  <Link to={"/gallery"}> Gallery </Link>
                </li>
                <li>
                  <Link to={"/Uploadresume"}> Upload Resume </Link>
                </li>

                <li>
                  <Link to={"/menu"}> Menu</Link>
                </li>
                <li>
                  <Link to={"/pagenotfound"}> Page not found</Link>
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>

        <Box>
          <Drawer variant="temporary" open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none"}, "& .MuiDrawer-paper": {
            boxSizing: "border-box", width: "240px",

          }
        }}
        onClick={handleDrawerToggle}
          >
            {drawer}

          </Drawer>
        </Box>

      </Box>
      
      
    </div>
  )
}

export default Header;
