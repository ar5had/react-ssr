require('babel-register')({
  presets: ['react']
});

const express = require('express');
const app = express();
const compression = require('compression');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

const PORT = process.env.PORT || 3000;

const Component = require('./Component');

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const props = { title: 'Universal React' };
  const html = ReactDOMServer.renderToString(
    React.createElement(Component, props)
  );
  res.send(html);
});

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}!`));