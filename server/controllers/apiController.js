const { createClient } = require('@deepgram/sdk');
const deepgram = createClient('d3b121ea821296238a901f7eddf6733cfe477c92');
const fs = require('fs');
const path = require('path');

const apiController = {};

// calling speech-to-text api with new recordin
apiController.getTranscribeData = (req, res, next) => {
  //new recording expected in the body

  // make a call to api
  return next();
};

apiController.analyzeAudioFile = async (req, res, next) => {
  const audio = fs.readFileSync(
    path.join(__dirname, '../../client/assets/fake-it-till-u-make-it.mp3')
  );
  //post transcribe data to database
  try {
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      audio,
      {
        model: 'nova-2',
        smart_format: true,
        language: 'en-US',
        filler_words: true,
        puctuate: 'verbatim',
      }
    );
    res.locals.transcript =
      result.results.channels[0].alternatives[0].transcript;
    res.locals.confidence =
      result.results.channels[0].alternatives[0].confidence;
    res.locals.words = result.results.channels[0].alternatives[0].words;
    res.locals.paragraphs =
      result.results.channels[0].alternatives[0].paragraphs;
    res.locals.request_id = result.metadata.request_id;
    res.locals.duration = result.metadata.duration;
    // res.locals.start = result.start;
    // res.locals.is_final = result.is_final;
    // res.locals.speech_final = result.speech_final;

    return next();
  } catch (err) {
    console.error('Error: ', err);
    return next(err);
  }
};
module.exports = apiController;
