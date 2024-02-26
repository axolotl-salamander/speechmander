const express = require('express');

const app = express();

<<<<<<< HEAD
const deepgram = createClient('d3b121ea821296238a901f7eddf6733cfe477c92');

// const testAudio = path.join(__dirname, '../client/assets/audio-test.mp3');

const testRouter = require('./routes/testRouter');
=======
// const testRouter = require('./routes/testRouter');
>>>>>>> 70b595d20c37d8700773b06626550fa79d037bc1
const apiRouter = require('./routes/apiRouter');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TEST
// app.use('/test', testRouter);

// route to all request from client database
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

<<<<<<< HEAD
app.post('/transcribe', async (req, res) => {
  try {
    const audio = req.body.audio;
    
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      fs.readFileSync(testAudio),
      {
        model: 'nova-2',
        smart_format: true,
        language: 'en-US',
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

=======
>>>>>>> 70b595d20c37d8700773b06626550fa79d037bc1
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
