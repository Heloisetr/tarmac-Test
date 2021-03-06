import { Route, Switch } from 'react-router-dom';
import React from 'react';

import App from 'App';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={App} />
  </Switch>
);

export default Routes;
