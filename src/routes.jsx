import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Login from './routes/Login.jsx';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='about' component={About}/>
    <Route path='login' component={Login}/>
  </Route>
);
