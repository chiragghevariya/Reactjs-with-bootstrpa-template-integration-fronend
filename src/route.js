import React from 'react';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";


const routeAll = () => (

    <Switch>
     <Route exact path="/" component={Home} />
     <Route component={PageNotFound} />
    </Switch>
);

export default routeAll;