const express = require('express');

const app = express();

// const testRouter = require('./routes/testRouter');
const apiRouter = require('./routes/apiRouter');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TEST
// app.use('/test', testRouter);

// route to all request from client database
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//  gloabal error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
