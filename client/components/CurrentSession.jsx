import React from 'react';

const CurrentSession = ({ currSession }) => {
  return (
    <div>
      <h1 className='results-header'>Current Session</h1>
      {currSession ? (
        <>
          <div className="results-container">
            <p><strong>Transcript:</strong> {currSession.transcripts}</p>
            <p><strong>Total Word Count:</strong> {currSession.wordCount}</p>
            <p><strong>Word per Second:</strong> {currSession.wordPerSec}</p>
            <p><strong>Avg. Pause Duration:</strong> {currSession.averagePauseDuration}</p>
            <p><strong>Total Pauses: </strong>{currSession.totalPauses}</p>
          </div>
        </>
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
};

export default CurrentSession;
