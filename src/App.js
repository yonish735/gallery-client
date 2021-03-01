import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { AUTH_DONE } from './constants/actionTypes';

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
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
