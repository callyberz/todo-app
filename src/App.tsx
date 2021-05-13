import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(({ path, exact, component }) => {
          return (
            <Route
              key={`route-${path.join('-')}`}
              path={path}
              exact={exact || false}
              component={component}
            />
          );
        })}
        {/* <Route path='*'>
          <NotFound />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
