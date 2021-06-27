import React from 'react';
import { Route, Switch,Redirect,withRouter} from 'react-router-dom';
// import {IndexRoute} from 'react-router'
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/redux';
import Page5 from './pages/page1/neiye';

const BasicRouter=()=>{
    return(
    <div>
        <Switch>
            <Redirect from='/page2/:w' to="/page2"></Redirect>
            <Route exact path="/" component={Page1}/>
            <Route exact path="/page2" component={Page2}/>
            <Route exact path="/page3" component={Page3}/>
            <Route exact path="/redux" component={Page4}/>
            <Route exact path="/neiye" component={Page5}/>
        </Switch>
    </div>)
};

export default BasicRouter
// Redirect 设置重定向