import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { GlobalZoomLevel } from './Context';
import { Dragonball } from './App.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuitem: {
    borderRadius: "0%", 
    '&:hover' : { 
        backgroundColor: "white",
        color: "blue",
    }
  },
}));

const Navbar = ({menuselect}) => {
  const classes = useStyles();

  const [restaurant, setRestaurant ] = useState('restaurant');
  const [cafe, setCafe ] = useState('cafe');
  const [date, setDate ] = useState('date');

  const { setZoomlevel } = useContext(Dragonball);
  /// static contextType = GlobalZoomLevel

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <MenuItem onClick={()=>menuselect('')} className={classes.menuitem}>
                All
            </MenuItem>
            <MenuItem onClick={()=>setZoomlevel(7)} className={classes.menuitem}>
                Restaurant
            </MenuItem>
            <MenuItem onClick={()=>menuselect(cafe)} className={classes.menuitem}>
                Cafe
            </MenuItem>
            <MenuItem onClick={()=>menuselect(date)} className={classes.menuitem}>
                Date
            </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;