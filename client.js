const Redux = require('redux');
const { Provider } = require('react-redux');
const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes/routes');

const reducer = state => state;

const store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document
);