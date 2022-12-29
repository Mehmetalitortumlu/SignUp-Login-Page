import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Home from './Form/Home';
import Login from './Form/Login';
import SignUp from './Form/SignUp';

function Container() {
    return (
        <Router>
            <div id='containerDiv'>
                <nav>
                    <ul id='containerList'>
                        <li>
                            <NavLink activeClassName='isactive' to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='isactive' to="/signup">SignUp</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
}

export default Container
