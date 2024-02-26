const express = require('express');
const path = require('path');
const fs = require('fs');
const { createClient } = require('@deepgram/sdk');

const apiRouter = require('./routes/apiRouter');

const app = express();
const PORT = 3000;

const deepgram = createClient('d3b121ea821296238a901f7eddf6733cfe477c92');

const testAudio = path.join(__dirname, '../client/assets/bad-speech.mp3');

//TEST
// const testRouter = require('./routes/testRouter');
// app.use('/test', testRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/transcribe', async (req, res) => {
  try {
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(testAudio),
      {
        model: 'nova-2',
        smart_format: true,
        language: 'en-US',
        filler_words: true,
        puctuate: 'verbatim',
        // sentiment: 'positive',
      }
    );   
    return res.status(200).send(result);
  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Error transcribing audio.');
  }
});
// route to all request from client database
app.use('/api', apiRouter);

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
