import React from 'react';
import {Button, TextField, Typography} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {loginActionCreator} from '../../routes/Login/redux/actions/login.action';
import {validationSchema} from './LoginForm.schema';
import {LoginFormPayload} from './types';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: 'mvsubhash29@gmail.com',
    password: 'Dimple#5c3123'
  };

  const onSubmit = (payload: LoginFormPayload) => {
    dispatch(loginActionCreator(payload));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  // TODO: Need to display server errors. So we need to have placeholder
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant='h5' style={{marginBottom: 8}}>
        Login
      </Typography>
      <TextField
        label='Email'
        variant='outlined'
        fullWidth
        margin='normal'
        name='email'
        id='email'
        value={formik.values.email}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
      />
      <TextField
        label='Password'
        variant='outlined'
        fullWidth
        name='password'
        margin='normal'
        type='password'
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
      />
      <Button color='primary' variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
};
