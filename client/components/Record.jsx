import React, { useState, useEffect, useRef } from 'react';
import testAudio from '../assets/audio-test.mp3';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [finishedRecording, setFinishedRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
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
        setFinishedRecording(true);

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
      <div></div>
      {
        (isRecording || transcript) && (
          <div className="record-container">
            <div>
              <p>{finishedRecording ? 'Recorded' : 'Recording'}</p>
              <p>{finishedRecording ? 'Analyzing your speech' : 'Start speaking...'}</p>
            </div>
          </div>
        )
      }

      {
        transcript && (
          <div className="transcript-container">
            <p>{transcript}</p>
          </div>
        )
      }

      {
        isRecording && (
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 21 21">
              <g fill="none" stroke="currentColor" >
                <circle cx="10.5" cy="10.5" r="5"/>
                <circle cx="10.5" cy="10.5" r="3" fill="currentColor"/>
              </g></svg>          
          </div>
        )
      }

      {
        (!isRecording && mp3File) && (
          <audio controls src='new-speech-recording.mp3'></audio>
        )
      }

      <div className="buttons">
        {
          !isRecording
            ? <div onClick={handleToggleRecording} className='record-btn'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                <path fill="currentColor" stroke="currentColor" d="M1.436 12.33a1.14 1.14 0 0 0 .63 1a1.24 1.24 0 0 0 1.22 0l8.65-5.35a1.11 1.11 0 0 0 0-2L3.286.67a1.24 1.24 0 0 0-1.22 0a1.14 1.14 0 0 0-.63 1z"/>
              </svg> */}
              I'm Ready
            </div>
            : <button onClick={handleToggleRecording} className='stop-record-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 14 14">
                <path fill="currentColor" stroke="currentColor" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0z"/>
              </svg>
            </button>
        }
      </div>
    </>
  );
};
<audio></audio>;

export default Record;