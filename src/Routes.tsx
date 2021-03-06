import { Route, Switch } from 'react-router-dom';
import React from 'react';

import DashboardFlights from 'containers/dahsboardContainer/DashboardFlightsContainer';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={DashboardFlights} />    
  </Switch>
);

export default Routes;
