import React, {Suspense} from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import { Spin} from "antd";
import App from "../App"
import "./routeHighLevel.css"

const RouteHighLevel =()=> {
    return (
        <Suspense fallback={(<div className="center"><Spin tip="Loading..."/></div>)}>
        <Router>
            <Route path="/login" component={LoginForm}/>
            {/*<Route path="/register" component={RegisterForm} />*/}
            <Route path="/" component={App}/>
        </Router>
        </Suspense>
    )
}
export default RouteHighLevel;