const React = require('react');
const ReactRouter = require('react-router');
const { Router, Route, RouterContext, browserHistory, IndexRoute } = require('react-router'); 
const Layout = require('../views/Layout.js');
const Index = require('../views/Index.js');
const About = require('../views/About.js');

module.exports = (
  <Router history={ browserHistory }> 
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Index }/>
      <Route path='about' component={ About }/>      
    </Route>
  </Router>
);