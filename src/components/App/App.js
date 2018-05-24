import React from "react";
import { Switch, Route } from "react-router-dom";
import { AnimatedSwitch, AnimatedRoute } from "react-router-transition";
import LandingPage from "../../views/LandingPage";
import Studio from "../../views/Studio";
import List from "../../views/List";

/** Since I chose not to implement redux this is where
 the selection from the list component gets set to the state so I can pass it to the studio component */

class App extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
    this.state = {
      selectedStudio: {}
    };
    this.handleChosenStudio = this.handleChosenStudio.bind(this);
  }

  handleChosenStudio(studio) {
    this.setState({
      selectedStudio: studio
    });
  }

  render() {
    return (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/list"
          render={routeProps => (
            <List
              handleChosenStudio={this.handleChosenStudio}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/studio"
          render={routeProps => (
            <Studio studio={this.state.selectedStudio} {...routeProps} />
          )}
        />
        <Route path="*" component={LandingPage} />
      </AnimatedSwitch>
    );
  }
}

export default App;
