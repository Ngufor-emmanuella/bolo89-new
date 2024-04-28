import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../styles/Time.css';

const Time = () => {
  return (
    <div className="time">
      <Box style={{ bgcolor: "pink"}}>
        {/* <AppBar style={{bgcolor: "red", color: "red" }}> */}
          <Box>

            <ul>
              <li> (+237) 652 921 000 | 693 339 340 </li>
              <li> Mon - Fri 8am - 9pm | Sat. 10am - 6pm </li>
            </ul>

            <ul>
              <li>
                <NavLink to={"/"}>En</NavLink>
              </li>
              <li>
              <NavLink to={"/"}>Fr</NavLink>

              </li>
            </ul>

          </Box>
        {/* </AppBar> */}

      </Box>
      
    </div>
  );
};

export default Time;
