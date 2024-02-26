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
  const wordsQuery =
    'SELECT id, word, start_time, end_time, transcript_id FROM words;';
  const transcriptQuery = 'SELECT id, transcript, duration FROM transcript;';

  //Querying words table
  db.query(wordsQuery)
    .then((data) => {
      res.locals.words = data.rows;
      // Querying transcript table
      db.query(transcriptQuery)
        .then((data) => {
          res.locals.transcript = data.rows;
          return next();
        })
        .catch((err) => next(err));
    })
    .catch((err) =>
      next({
        log: 'dbController.getSessionData error: ' + err,
        status: 500,
        message: { err: 'An error occurred while fetching data from DB' },
      })
    );
};

module.exports = dbController;
