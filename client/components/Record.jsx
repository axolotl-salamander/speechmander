import React, { useState, useEffect, useRef } from 'react';
import testAudio from '../assets/audio-test.mp3';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  // const [transcript, setTranscript] = useState('');
  const [isBlocked, setIsBlocked] = useState(true);
  const [mp3File, setMp3File] = useState();
  
  useEffect(() => {
    navigator.getUserMedia({ audio: true }, () => {
      console.log('audio permission granted!');
      setIsBlocked(false);
    }, () => {
      console.log('audio permission denied');
      setIsBlocked(true);
    });
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    if (isBlocked) {
      console.log('audio permission denied');
    } else {
      Mp3Recorder.start()
        .then(() => {
          console.log('currently recording...');
        })
        .catch(err => console.log('there was an error: ', err));
    }
  };

  const stopRecording = () => {
    Mp3Recorder.stop().getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, 'new-speech-recording.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });

        console.log(file);

        setMp3File(file);

        const player = new Audio(URL.createObjectURL(file));

        setTimeout(() => {
          player.play();
        }, 1000);

        // return setFinishedRecording(true);
      })
      .catch(err => console.log('There was an error retreiving recorded file.'));
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    !isRecording ? startRecording() : stopRecording();
  };

  // API call to send audio Deepgram API
  const transcribeAudio = async (audio) => {
    const audioFile = testAudio;

    fetch('/api')
      .then(response => response.json())
      .then(data => console.log('Transcript: ', data))
      .catch(err => console.error('Error: ', err));
  };
    
  return (
    <>
      <div className="buttons">
        {
          <div className="currently-recording-container">
            <h3>{!isRecording ? 'Ready to start recording?' : 'Recording...'}</h3>
            <div onClick={handleToggleRecording} className={!isRecording ? 'record-btn' : 'record-btn pulse-animation'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 26">
                <path fill="currentColor" d="M13 6.188a6.812 6.812 0 1 0 0 13.625a6.812 6.812 0 1 0 0-13.625z"/>
              </svg>
              <p>{!isRecording ? "I'm Ready" : "Stop"}</p>
            </div>
          </div>
        }
      </div>
    </>
  );
};
<audio></audio>;

export default Record;