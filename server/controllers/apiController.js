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

// apiController.uploadAudioFile = (req, res, next) => {
//   console.log('\n\nLOGGING REQ.BODY IN MIDDLEWARE:\n\n', req.file);

//   try {
//     // const { audio }  = req.file;
//     upload.single(req.file)

    // point incoming data to be saved in '/uploads' directory    


    // const storage = multer.diskStorage({
    //   filename: function (req, file, cb) {
    //     cb(null, file.audio);
    //   },
    //   destination: function(req, file, cb) {
    //     // cb(null, path.resolve(__dirname, '../uploads'));
    //     cb(null, '../uploads')
    //   }
    // });
  
    // upload raw .mp3 file
    // const upload = multer({ storage });


    // Go to next middleware after file successfully uploaded to project directory
    // return next();
  // } catch(err) {
    // return next('There was an error in apiController.uploadAudioFile: ', err);
  // }

// };

apiController.analyzeAudioFile = async (req, res, next) => {
  // console.log('analyze audio file middleware hit!', req.body.audio);
  const incomingAudio = fs.readFileSync(path.join(__dirname, '../uploads/new-speech-recording.mp3'));
  // const audio = fs.readFileSync(
  //   // path.join(__dirname, '../../client/assets/audio-test.mp3')
  // );

  //post transcribe data to database
  try {
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
      incomingAudio,
      {
        model: 'nova-2',
        smart_format: true,
        language: 'en-US',
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
