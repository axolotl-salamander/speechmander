const apiController = {};

// calling speech-to-text api with new recording
apiController.getTranscribeData = (req, res, next) => {
  //new recording expected in the body

  // make a call to api
  return next();
};

module.exports = apiController;
