import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Nav from './routes/Layout'
import Agents from './routes/Agents'
import Header from './components/Header'

function RouterConfig({ history }) {
  return (
    <div>
      <Header />
      <div className="content-wrap">
        <Nav />
        <div>
          <Router history={history}>
            <Switch>
              <Route path="/dashbord" exact component={() => ('dashbord')} />
              <Route path="/agents" exact component={Agents} />
              <Route path="/myCurise" exact component={() => ('myCurise')} />
              <Route path="/help" exact component={() => ('help')} />
              <Redirect to="/agents" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default RouterConfig;
