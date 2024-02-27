const dataController = {};

dataController.wordCountConfidence = (req, res, next) => {
  if (!res.locals.words || !res.locals.duration)
    return next({
      log: 'Error occurred while dataController.wordCountConfidence',
      status: 500,
      message: { err: 'An error occurred' },
    });

  const { words, duration } = res.locals;

  const wordCount = words.length;

  const wordPerSec = (wordCount / duration).toFixed(2);
  for (let i = 0; i < words.length; i++) {
    words[i].index = i;
  }

  const sortedWords = [...words].sort((a, b) => {
    return a.confidence - b.confidence;
  });

  const bottomThreeWords = [];
  for (let i = 0; i < 3; i++) {
    if (sortedWords[i]) {
      const obj = {
        index: sortedWords[i].index,
        word: sortedWords[i].word,
        confidence: Number(sortedWords[i].confidence).toFixed(2),
      };
      bottomThreeWords.push(obj);
    }
  }
  res.locals.wordCount = wordCount;
  res.locals.wordPerSec = wordPerSec;
  res.locals.bottomThreeWords = bottomThreeWords;

  next();
};

dataController.analyzeFluency = (req, res, next) => {
  console.log('analyzeFluency called');
  const data = res.locals;

  // check that data.words is defined and has at least two elements
  if (!data.words || data.words.length < 2) {
    // console.log('data.words is not defined or has less than two elements');
    return next({
      log: 'Error occurred while dataController.analyzeFluency',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }

  // calculate pauses between words
  const pauses = [];
  for (let i = 0; i < data.words.length - 1; i++) {
    const currentWordEnd = data.words[i].end;
    const nextWordStart = data.words[i + 1].start;
    const pauseDuration = nextWordStart - currentWordEnd;
    // console.log("Pause Duration:", pauseDuration.toFixed(8), "seconds");
    // console.log(
    //   "currentWordEnd:",
    //   currentWordEnd,
    //   "nextWordStart:",
    //   nextWordStart
    // );
    pauses.push(pauseDuration);
  }

  const wordsWithPauses = [];
  for (let j = 0; j < data.words.length; j++) {
    console.log('inside for loop');
    const truncPause = Number(pauses[j]).toFixed(2);
    wordsWithPauses.push(data.words[j].word, truncPause);
  }
  // analyze pauses
  const totalPauses = pauses.length;
  const averagePauseDuration =
    pauses.reduce((acc, duration) => acc + duration, 0) / totalPauses;

  // console.log("Total Pauses:", totalPauses);
  // console.log(
  //   "Average Pause Duration:",
  //   averagePauseDuration.toFixed(8),
  //   "seconds"
  // );
  res.locals.totalPauses = totalPauses;
  res.locals.averagePauseDuration = Number(averagePauseDuration).toFixed(2);
  res.locals.wordsWithPauses = wordsWithPauses.join(' ');

  return next();
};

module.exports = dataController;
