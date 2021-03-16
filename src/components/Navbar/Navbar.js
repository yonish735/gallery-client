import React from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import gallery from '../../images/gallery.svg';
import { logout } from '../../actions/auth';
import useStyles from './styles';
import SearchBox from './SearchBox/SearchBox';

const Navbar = () => {
  const user     = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const classes  = useStyles();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar className={classes.headerOuter} position="sticky" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={gallery} alt="gallery icon" height="60" />
        <Typography component={Link} to="/" className={classes.title} variant="h2" align="center"><span className={classes.albumAlbum}>Album</span><span className={classes.albumShare}>Share</span></Typography>
      </div>
      {user &&
      <>
        <SearchBox />
        <Toolbar className={classes.toolbar}>
          <div className={classes.profile}>
            <>
              <Avatar className={classes.avatar} alt={`${user?.firstName} ${user?.lastName}`}>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</Avatar>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={handleClick}>Logout</Button>
            </>
          </div>
        </Toolbar>
      </>
      }
    </AppBar>
  );
};

export default Navbar;
