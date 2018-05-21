const express = require('express');
const expressSession = require('express-session');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const apiRouter = require('./api');
const authRouter = require('./auth')

app.use(volleyball);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const sessionMiddleware = expressSession({
  secret: 'secreto seshionss',
  resave: true,
  saveUnitialized: true,
})
app.use(sessionMiddleware);

// app.use((req, res, next) => {
//   console.log('session', req.session)
//   next()
// })

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  console.error('There was a problem here')
  console.error(err)
  res.status(err.status || 500).send(err.message)
})

module.exports = app;
