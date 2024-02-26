import React from 'react';

const CurrentSession = ({ currSession }) => {
  return (
    <div>
      <h1>Current Session</h1>
      {currSession ? (
        <>
          <p>Scripts:{currSession.wordsWithPauses}</p>
          <p>Total Word Count: {currSession.wordCount}</p>
          <p>Word per Second: {currSession.wordPerSec}</p>
          <p>Avg. Pause Duration{currSession.averagePauseDuration}</p>
          <p>Total Pauses{currSession.totalPauses}</p>
        </>
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
};

export default CurrentSession;
