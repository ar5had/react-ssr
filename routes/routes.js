const React = require('react');
const ReactRouter = require('react-router');
const { Router, Route, RouterContext, browserHistory, IndexRoute } = require('react-router'); 
const Layout = require('../views/Layout.js');
const Index = require('../views/Index.js');
const About = require('../views/About.js');

if (typeof window === 'object') {
  function createElement(Component, props) {
    return <Component {...props} custom={window.PROPS} />
  }
}

module.exports = (
  <Router history={ browserHistory } createElement={createElement}> 
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Index }/>
      <Route path='about' component={ About }/>      
    </Route>
  </Router>
);