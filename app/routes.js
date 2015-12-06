import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Dashboard from './components/Dashboard';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/lesson/:id' component={Lesson} />
    <Route path='/dashboard' component={Dashboard} />
  </Route>
);
