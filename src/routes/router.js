import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const NotFound=()=>{
    return(
        <div>
            <h1>404 page not found</h1>
        </div>
    )
}
const Routes = ()=>(
    <Router>
        <div className="App">
        <Switch>     
            <Route exact path="/" component={ Home }/>
            <Route component={NotFound} />
        </Switch>
        </div>
    </Router>
)
export default Routes;
