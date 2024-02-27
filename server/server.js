const express = require('express');
const path = require('path');
const app = express();

// const testRouter = require('./routes/testRouter');
const apiRouter = require('./routes/apiRouter');
const userRouter = require('./routes/userRouter');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TEST
// app.use('/test', testRouter);

// route to all request from client database
app.use('/api', apiRouter);

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
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
