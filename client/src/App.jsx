import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { NoMatch } from "./pages/404";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
    return(
        <>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />

                <Route path='/home' component={() => <Redirect to='/' />} />

                <Route path='/dashboard' component={Dashboard} />

                <Route component={NoMatch} />
            </Switch>
        </Router>
        {/* <h1>This is a test deploy for REACT is running...🖥</h1> */}
        </>
    )
}

export default App;