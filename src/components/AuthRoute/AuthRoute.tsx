import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {RootState} from '../../redux/types';

export function AuthRoute(props: any) {
  const {isAuthenticated} = useSelector((state: RootState) => state.login);

  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }

  return <Route {...props} />;
}
