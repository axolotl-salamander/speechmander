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

dbController.testInsert = (req, res, next) => {
  const query =
    'INSERT INTO test_table (test_column1, test_column2, test_column3) VALUES ($1, $2, $3);';
  const values = ['hello', 100, true];

  return db
    .query(query, values)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => next(err));
};

dbController.testSelect = (req, res, next) => {
  const query = 'SELECT * FROM test_table;';
  
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
