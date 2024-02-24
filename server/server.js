const express = require('express');
const path = require('path');
const fs = require('fs');

const dbController = require('./controllers/dbController');
const app = express();

const { createClient } = require('@deepgram/sdk');
const deepgram = createClient('d3b121ea821296238a901f7eddf6733cfe477c92');

const testAudio = path.join(__dirname, '../client/assets/audio-test.mp3');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

app.get('/transcribe', async (req, res) => {
  try {
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(testAudio),
      {
        model: 'nova-2',
        smart_format: true,
        language: 'en-US'
      }
    );   
    return res.status(200).send(result.results.channels[0].alternatives);
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Error transcribing audio.');
  }
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send('This is not the page you\'re looking for...')
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
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
