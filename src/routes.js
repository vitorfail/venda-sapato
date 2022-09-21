import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
export default function Routes(){
    return(
        <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}></Route>
                </Switch>
        </BrowserRouter>
    )
}