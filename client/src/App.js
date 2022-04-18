import './App.css';
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

import { BrowserRouter,   Router} from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Login from "./Component/auth/Login "
import Register from "./Component/auth/Register"
import Display from "./Component/display/display"
const App = () => 
<BrowserRouter>
    <Fragment>
      
        <Route exact path='/' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/display' component={Display}/>
    </Fragment>
    </BrowserRouter>
export default App;
