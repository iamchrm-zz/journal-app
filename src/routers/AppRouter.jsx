import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route path="/" exact component={JournalScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
