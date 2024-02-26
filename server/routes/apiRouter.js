const express = require('express');

// const multer = require('multer');
// const upload = multer({ dest: '/uploads/'});

const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');

const router = express.Router();

// handle GET request to /api/
// this request will fetch previouse sessions from database and send out manipulated data per client's needs
// router.get('/', dbController.getSessionData, (req, res) => {
//   return res.status(200).json(res.locals.test);
// });

// handle POST request to /api/
// this request should call speech-to-text api with new recording and save the returned data to the database

router.post(
  '/',
  apiController.analyzeAudioFile,
  dbController.postTranscript,
  dbController.getTranscriptId,
  dbController.insertWords,
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
