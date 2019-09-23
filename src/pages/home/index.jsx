import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { StyledHomePageWrapper } from './styles';
import ReceiveTraining from './containers/ReceiveTraining';
import RegisterTraining from './containers/RegisterTraining';

const HomeRouter = ({ match }) => (
  // @todo add routes to constants
  <Switch>
    <Route path={`${match.path}register`} component={RegisterTraining} />
    <Route path={`${match.path}receive`} component={ReceiveTraining} />
    <Redirect to={`${match.path}register`} />
  </Switch>
);
export default HomeRouter;
