import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "../../views/LandingPage";

class App extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="*" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
