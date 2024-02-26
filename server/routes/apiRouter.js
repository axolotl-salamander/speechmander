const express = require('express');

const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');
const dataController = require('../controllers/dataController');

const router = express.Router();

// handle GET request to /api/
// this request will fetch previouse sessions from database and send out manipulated data per client's needs
router.get(
  '/',
  dbController.getSessionData,
  dataController.analyzeData,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

// handel POST request to /api/
// this request should call speech-to-text api with new recording and save the returned data to the database
router.post(
  '/',
  apiController.getTranscribeData,
  dbController.postTranscribeData,
  (req, res) => {
    return res.status(200).json('DATA');
  }
);

// handel PATCH request to /api/
router.patch('/', (req, res) => {
  return res.status(200).json('DATA');
});

// handel DELETE request to /api/
router.delete('/', (req, res) => {
  return res.status(200).json('DATA');
});

module.exports = router;
