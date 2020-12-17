import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Applied from './Applied/Applied';
import Jobs from './Jobs/Jobs';
import Info from './Info/Info';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/jobs" component={Jobs} />
        <Route path="/applied" component={Applied} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  );
};

export default App;
