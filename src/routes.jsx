import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Counter from "./components/Counter";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/page-2" component={Page2}/>
                <Route path="/page-3" component={Page3}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;