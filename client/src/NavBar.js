import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function NavBar() { 
 
    return (
        <div pd="">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar display={'inline-flex'}  
            style={{ background: '#17252A' }}>
              <Toolbar>
                <Button variant="text">
                  <Typography
                    variant="h6"
                    noWrap
                    paddingRight="2.5em"
                    paddingLeft={"2.5em"}>
                  <NavLink
                    to="/profile"
                    style={{color:"white"}}
                    sx={{ mr:10 }}
                  >
                    Profile
                  </NavLink>
                  </Typography>
                </Button>
                
                <Button variant="text">
                  <Typography
                    variant="h6"
                    noWrap
                    paddingRight={"2.5em"}
                    paddingLeft={"2.5em"}
                    >
                    <NavLink
                      to="/messages"
                      style={{color:"white"}}
                    >
                      Messages
                    </NavLink>
                    </Typography>
                  </Button>
  
                  <Button variant="text">
                    <Typography
                      variant="h6"
                      noWrap 
                      paddingRight={"2.5em"}
                      paddingLeft={"2.5em"}
                      sx={{ flexGrow: 1 }}>
                      <NavLink
                        to="/campaigns"
                        style={{color:"white"}}
                      >
                        Campaigns
                      </NavLink>
                    </Typography>
                  </Button>
  
                  <Button variant="text">
                  <Typography
                    variant="h6"
                    noWrap
                    paddingRight={"2.5em"}
                    paddingLeft={"2.5em"}
                    >
                    <NavLink
                      to="/performance"
                      style={{color:"white"}}
                    >
                      Performance
                    </NavLink>
                    </Typography>
                  </Button>
  
                  
                  <Button variant="text">
                  <Typography
                    variant="h6"
                    noWrap
                    paddingRight={"2.5em"}
                    paddingLeft={"2.5em"}
                    >
                    <NavLink
                      to="/finances"
                      style={{color:"white"}}
                    >
                      Finances
                    </NavLink>
                    </Typography>
                  </Button>  
                  </Toolbar>
                </AppBar>
              </Box>
          </div>
        )
    }  
                          
    export default NavBar;
                        
                      
   