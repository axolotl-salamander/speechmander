const db = require('../models/dbModels.js');

const dbController = {};

dbController.testCreate = (req, res, next) => {
  const query =
    'CREATE TABLE test_table (id SERIAL PRIMARY KEY, test_column1 VARCHAR(255), test_column2 INT, test_column3 BOOLEAN);';
  console.log('dbController.test');

  return db
    .query(query)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

dbController.postTranscribeData = (req, res, next) => {
  const query =
    'INSERT INTO words (word, start, end, confidence, punctuated_word) VALUES ($1, $2, $3, $4, $5);';
  const values = ['i', '7.2599998', '7.46', '0.8708194', 'I'];

  return db
    .query(query, values)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

dbController.getSessionData = (req, res, next) => {
  const query = 'SELECT * FROM words;';

  return db
    .query(query)
    .then((data) => {
      console.log(data);
      res.locals.test = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

module.exports = dbController;
