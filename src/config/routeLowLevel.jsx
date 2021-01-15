import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RisksPage from "../container/risksPage";
import Logout from "../components/logout";
import Threats from "../components/threats";
import NotFound from "../container/notFound";
import Dashboard from "../container/dashboard";
import ThreatPage from "../container/threatPage";
import ProtectedRoute from "../components/common/protectedRoute";
import ThreatForm from "../components/threatForm"
import SAPage from "../container/SAPage";
import Reports from "../container/reportPage"
import Users from "../container/userPage"
import Settings from "../container/setting"

const Routes =()=> {
    return (
            <Switch>
                  {/* <Route path="/login" render={(props) => <LoginForm sortBy="newest" {...props} />} /> */}
                  {/*<Route path="/login" component={LoginForm} />*/}
                  {/*<ProtectedRoute path="/threats/:id" component={ThreatForm} />*/}
                  {/*<Route*/}
                  {/*  path="/threats"*/}
                  {/*  render={props => <Threats {...props} user={user} />}*/}
                  {/*/>*/}
                  {/* <Route path="/profile" component={Profile} /> */}
                  <Route path="/risks" component={RisksPage} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/reports" component={Reports} />
                <Route path="/users" component={Users} />
                <Route path="/settings" component={Settings} />
                  <Route path="/threats/:id" component={ThreatForm} />
                  <Route path="/threats" component={ThreatPage} />
                  <Route path="/sa" component={SAPage} />

                  <Redirect from="/" exact to="/dashboard" />
                  <Redirect to="/not-found" />

                {/* <Route path="/threats/:year?/:month?" component={Threats} /> */}
            </Switch>
    )
}
export default Routes;
