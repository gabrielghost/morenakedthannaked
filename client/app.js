import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';

const App = function (props) {
  return (
    <div>
      <Header />
      {props.children}
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export { App as default };
