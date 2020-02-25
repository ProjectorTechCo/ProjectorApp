import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/login/Login";
import Project from "./components/project/Project";
import "./style/index.scss";

export const App = (props) => {
    return (
        <Router>
            <Route to={"/"} component={Login}/>
            <Route to={"/project"} component={Project} />
        </Router>
    );
};
