const router = require('express').Router();
const React = require('react');
const ReactRouter = require('react-router');
const { Router, Route, RouterContext } = require('react-router');
const ReactDOMServer = require('react-dom/server');
const Redux = require('redux');
const { Provider } = require('react-redux');

const reducer = (state) => state;

router.get('*', (req, res) => {
  const props = { title: 'Universal React' };
  const store = Redux.createStore(reducer, props);  
  ReactRouter.match({
    routes: require('./routes.js'),
    location: req.url
  }, function(error, redirectLocation, renderProps) {
    if (error) {
      response.status(500).send(error.message);
    } else if (renderProps) {
      const html = ReactDOMServer.renderToString(
        <Provider store={store} >
          <RouterContext {...renderProps} />
        </Provider>
      );
      res.send(html);
    } else {
      res.status(404).send('NOT FOUND!');
    }
  });
});

module.exports = router;