import React, { useState } from 'react';
import { Avatar, Button, CircularProgress, Container, Grid, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout, signin, signup } from '../../actions/auth';
import Input from './Input';
import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm]         = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const WIP                     = useSelector((state) => state.auth.WIP);
  const errors                  = useSelector((state) => state.auth.errors);

  const dispatch = useDispatch();
  const history  = useHistory();
  const classes  = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword              = () => setShowPassword(!showPassword);

  let localErrors = errors;

  const switchModeInUp = (prevIsSignup) => {
    dispatch(logout());
    setForm(initialState);
    setIsSignup(!prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && form.confirmPassword !== form.password) {
      localErrors = 'Passwords didn’t match. Try again.';
      return true;
    }

    const user  = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      password: form.password,
    };
    const sFunc = isSignup ? signup : signin;
    dispatch(sFunc(user, history));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          {WIP && <CircularProgress className={classes.wip} />}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" value={form.firstName} handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" value={form.lastName} handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" value={form.email} handleChange={handleChange} type="email" />
            <Input name="password" label="Password" value={form.password} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" value={form.confirmPassword} handleChange={handleChange} type="password" />}
          </Grid>
          {localErrors && <div className={classes.error}>{localErrors}</div>}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={() => switchModeInUp(isSignup)}>
                {isSignup ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
