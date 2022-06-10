import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { history } from "@/store/reducers";

// Routes
import { ActualTasks } from "@/pages/ActualTasks/";
import { CompletedTasks } from "@/pages/CompletedTasks";

//Constants
import { URL } from "@/constants/routes";
import { ConnectedRouter } from "connected-react-router";


export const Pages = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={URL.TASKS} component={ActualTasks} />
      <Route path={URL.COMPLETED_TASKS} component={CompletedTasks} />
      <Redirect to={URL.TASKS} />
    </Switch>
  </ConnectedRouter>);

