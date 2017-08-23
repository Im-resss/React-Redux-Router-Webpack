import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home.js';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/404" render={() => <div>Bir hata oluştu!</div>} />
        <Route
          path="/"
          render={() => <Home />}
        />
      </Switch>
    );
  }
}

export default withRouter(App);