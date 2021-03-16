import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PicturesHome from './components/Home/Pictures';
import Search from './components/Search/Search';
import Auth from './components/Auth/Auth';
import { AUTH_DONE } from './constants/actionTypes';

// TODO: add propTypes to all components
const App = () => {
  const dispatch = useDispatch();
  const token    = window.localStorage.getItem('token');

  token && dispatch({ type: AUTH_DONE, data: { token } });

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/galleries/:galleryId" exact component={PicturesHome} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
