import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleMenu}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Your App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <div style={{ width: 250 }}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Divider />
          {/* Additional menu items can be added here */}
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
