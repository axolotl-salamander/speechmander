import React, { useState, useEffect } from 'react';
import testAudio from '../assets/audio-test.mp3';

// import { createClient } from '@deepgram/sdk';

// const deepgram = createClient('proxy', {
//   restProxy: { url: 'http://localhost:8080' },
// });

const Record = () => {

  const transcribeAudio = async (audio) => {
    // const audioFile = await(fetch(testAudio));
    const audioFile = audio;

    fetch('/transcribe', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => console.log('Transcript: ', data))
      .catch(err => console.error('Error: ', err));

  };

  transcribeAudio(testAudio)
    .then(response => console.log('response line 38: ', response))
    .catch(err => console.error(err));
    
  return (
    <>
      <div>Record</div>
      {/* <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onMouseDown={listen} onMouseUp={stop}>Speak!</button>
      {listening && <div>Go ahead...</div>}
      {speaking && <p>You are speaking!</p>} */}
      <audio controls src={testAudio}></audio>
    </>
  );
};
<audio></audio>;

export default Record;