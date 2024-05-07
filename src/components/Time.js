import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../styles/Time.css';

const Time = () => {
  return (
    <Box className="time">
      
            <ul style={{ display: "flex", listStyleType: "none", marginLeft: '1rem', marginRight: '1rem'}}>
              <li> (+237) 652 921 000 | 693 339 340 </li>
              <li> Mon - Fri 8am - 9pm | Sat. 10am - 6pm </li>
            </ul>
            <ul style={{ display: "flex", listStyleType: "none", textDecoration: "none"}}>
              <li>
                <NavLink to={"/"}>En</NavLink>
              </li>
              <li>
              <NavLink to={"/"}>Fr</NavLink>

              </li>
            </ul>
    
    </Box>
  );
};

export default Time;
