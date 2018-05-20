import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../../views/LandingPage";
import List from "../../views/List";

class App extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/list" component={List} />
        <Route path="*" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
