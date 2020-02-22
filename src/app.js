import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/login/Login";


export const App = (props) => {
    return (
        <Router>
            <Route to="/" component={Login}/>
        </Router>
    );
};
