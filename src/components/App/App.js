import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../../views/LandingPage";
import Studio from "../../views/Studio";
import List from "../../views/List";

class App extends React.Component {
  constructor({ styles, ...props }) {
    super(...props);
    this.styles = styles;
    this.state = {
      selectedStudio: {
        //remove content here later
        id: "1",
        name: "Sax & Fön",
        reviews: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        address: "Rådmansgatan 46",
        price: "350"
      }
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
      <Switch>
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
      </Switch>
    );
  }
}

export default App;
