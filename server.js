require('babel-register')({
  presets: ['react']
});

const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}!`));