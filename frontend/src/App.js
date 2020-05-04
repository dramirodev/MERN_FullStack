import React from 'react';
import routes from './config/routes';
import { Switch } from 'react-router-dom';

import './App.scss';
import { RouterWithSubRoutes } from './components/RouterWithSubRoutes';

function App() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <RouterWithSubRoutes {...route} key={index} />
      ))}
    </Switch>
  );
}

export default App;
