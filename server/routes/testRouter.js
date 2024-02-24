const express = require('express');

const dbController = require('../controllers/dbController');

const testRouter = express.Router();

testRouter.get('/create', dbController.testCreate, (req, res) => {
  res.status(200).send('test table created!');
}
);  

testRouter.get('/insert', dbController.testInsert, (req, res) => {
  res.status(200).send('test data inserted!');
}   
);

testRouter.get('/select', dbController.testSelect, (req, res) => {
  res.status(200).send(res.locals.test);
}   
);

module.exports = testRouter;