import React, { useEffect } from 'react';
import { Route } from "react-router-dom";
import { history } from '../utils/history';

interface PrivateRouteProps {
  component: any,
  path: string,
  exact?: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const auth = true;

  useEffect(() => {
    if (auth) {
      history.push('/');
    }
  }, [auth])

  if (!auth) return (
    <>Loading..</>
  )

  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  )
}

export default PrivateRoute;