import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LoginForm} from '../../components/LoginForm';
import {RootState} from '../../redux/types';

export function Login() {
  const {isAuthenticated} = useSelector((state: RootState) => state.login);

  return !isAuthenticated ? <LoginForm /> : <Redirect to='/dashboard' />;
}
