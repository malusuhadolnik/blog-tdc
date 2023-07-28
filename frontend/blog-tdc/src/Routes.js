import React from 'react';
import { Route, Switch,  } from 'react-router-dom';

function Routes() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route path="/login" component={ Login } /> */}
      </Switch>
    );
  }
  export default Routes;