import React from 'react';
import {
  Router,
  Switch,
} from "react-router-dom";
import { history } from '../utils/history';

import PublicRoute from './PublicRoute';
import SignInPage from '../pages/SignIn/SignIn';
import SignUpPage from '../pages/SignUp/SignUp';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch> 
        <PublicRoute exact path={'/signin'} component={SignInPage} />
        <PublicRoute exact path={'/signup'} component={SignUpPage} />
      </Switch>
    </Router>
  )
}

export default Routes;