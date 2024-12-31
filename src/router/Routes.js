import React from "react";
import HomeLight from "../views/HomeLight";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <Switch>
          <Route exact path="/" component={HomeLight} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
