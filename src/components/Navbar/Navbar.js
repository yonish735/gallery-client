import React from 'react';
import { AppBar, Avatar, Button, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import gallery from '../../images/gallery.svg';
import { logout } from '../../actions/auth';
import useStyles from './styles';

const Navbar = () => {
  const user     = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const classes  = useStyles();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img className={classes.image} src={gallery} alt="gallery icon" height="60" />
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"><span className={classes.albumAlbum}>Album</span><span className={classes.albumShare}>Share</span></Typography>
      </div>
      {user &&
      <>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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
