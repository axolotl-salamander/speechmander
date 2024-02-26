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
        console.log('logging .then() line 40');
        const file = new File(buffer, 'new-speech-recording.mp3', {
          type: blob.type,
          lastModified: Date.now()
        });

        console.log('new audio file, line 46: ', file);
        setMp3File(file);
        handleApiCall(file);
        // const player = new Audio(URL.createObjectURL(file));

        // fetch('/api', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'audio/mp3'
        //   },
        //   body: {
        //     audio: file
        //   }
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('logging data: ', data);
        //   })
        //   .catch(err => console.log('there was an error: ', err));

        // setTimeout(() => {
        //   player.play();
        // }, 1000);
        setFinishedRecording(true);
      })
      .catch(err => console.log('There was an error creating recorded file.'));
  };

  const handleApiCall = async (audio) => {
    console.log('handle api call hit! line 77', audio);
    try {
      const formData = new FormData();
      formData.append('audioFile', audio);
      console.log('logging form data line 79: ', formData);

      await fetch('/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Successfully uploaded file!: ', data);
        })
        .catch(err => console.log('There was an error uploading mp3 file: ', err));      
    } catch(err) {
      console.log('There was an error hitting /api endpoint: ', err);
    }
  }

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    !isRecording ? startRecording() : stopRecording();
  };

  // // API call to send audio Deepgram API
  // const transcribeAudio = async (audio) => {
  //   const audioFile = testAudio;

  //   fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: {
  //       audio: audioFile
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log('Transcript: ', data))
  //     .catch(err => console.error('Error: ', err));
  // };
    
  return (
    <>
      <div>Record</div>
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
            insert pulsing recording icon here
          </div>
        )
      }

      {
        (!isRecording && mp3File) && (
          <audio controls src=''></audio>
        )
      }

      <div className="buttons">
        {
          !isRecording
            ? <button onClick={handleToggleRecording} className='record-btn'>Record</button>
            : <button onClick={handleToggleRecording} className='stop-record-btn'>Stop Recording</button>
        }
      </div>
    </>
  );
};
<audio></audio>;

export default Record;