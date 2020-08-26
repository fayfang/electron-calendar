/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './views/home/index';
// import CounterPage from './containers/CounterPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
        {/* <Route path={routes.HOME} component={HomePage} /> */}
      </Switch>
    </App>
  );
}
