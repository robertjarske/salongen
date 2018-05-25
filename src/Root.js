import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App/App";

/**This is where we wrap the app in the router, this is also where I would wrap the app in provider if I where using redux */
const Root = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Route
            path="/"
            render={routeProps => <App location={location} {...routeProps} />}
          />
        )}
      />
    </Router>
  );
};

export default Root;
