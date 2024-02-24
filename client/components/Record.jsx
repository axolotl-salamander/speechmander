import React, { useState, useEffect } from 'react';
import testAudio from '../assets/audio-test.mp3';

const Record = () => {

  const transcribeAudio = async (audio) => {
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
    
  return (
    <>
      <div>Record</div>
    </>
  );
};
<audio></audio>;

export default Record;