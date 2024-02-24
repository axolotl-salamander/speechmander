const express = require('express');

const testController = require('../controllers/testController');

const testRouter = express.Router();

testRouter.get('/create', testController.testCreate, (req, res) => {
  res.status(200).send('test table created!');
});

testRouter.get('/insert', testController.testInsert, (req, res) => {
  res.status(200).send('test data inserted!');
});

testRouter.get('/select', testController.testSelect, (req, res) => {
  res.status(200).send(res.locals.test);
});

module.exports = testRouter;
