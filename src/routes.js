import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Counter from "./pages/Counter";
import People from "./pages/People";
import WeatherForecast from "./pages/WeatherForecast";
import Dashboard from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/home" exact component={Dashboard}/>
                        <Route path="/counter" component={Counter}/>
                        <Route path="/people" component={People}/>
                        <Route path="/fetchData" component={WeatherForecast}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;
