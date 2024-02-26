const express = require('express');

const apiController = require('../controllers/apiController');
const dbController = require('../controllers/dbController');
const dataController = require('../controllers/dataController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const router = express.Router();

// handle GET request to /api/
// this request will fetch previouse sessions from database and send out manipulated data per client's needs
// router.get('/', dbController.getSessionData, (req, res) => {
//   return res.status(200).json(res.locals.test);
// });

// handel POST request to /api/
// this request should call speech-to-text api with new recording and save the returned data to the database
router.get(
  '/',
  sessionController.isLoggedIn,
  cookieController.setSSIDCookie,
  apiController.analyzeAudioFile,
  dbController.postTranscript,
  dbController.getTranscriptId,
  dbController.insertWords,
  dataController.wordCountConfidence,
  dataController.analyzeFluency,
  dbController.insertAnalyzedData,
  (req, res) => {
    return res.status(200).json({
      wordCount: res.locals.wordCount,
      wordPerSec: res.locals.wordPerSec,
      averagePauseDuration: res.locals.averagePauseDuration,
      totalPauses: res.locals.totalPauses,
      wordsWithPauses: res.locals.wordsWithPauses,
      transcripts: res.locals.transcript,
    });
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
