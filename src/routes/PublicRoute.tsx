import React from 'react';
import { Route } from "react-router-dom";

interface PublicRouteProps {
  component: Function,
  path: string,
  exact?: boolean
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => <Component {...props} />}
    />
  )
}

export default PublicRoute;