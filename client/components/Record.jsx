import React from 'react';
import testAudio from '../assets/audio-test.mp3';

const Record = () => {
//   const apiKey = '1loRoOe9aayKsjqIWdfCrrac6XaFfzNemRIs/PHNjsQ=';
  const apiUrl = 'https://api.voicegain.ai/v1/asr/transcribe';

  const transcribeAudio = (audio) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1loRoOe9aayKsjqIWdfCrrac6XaFfzNemRIs/PHNjsQ='
      },
      body: {
        audio: {
          source: {
            fromUrl: audio,
            credential: 'Bearer 1loRoOe9aayKsjqIWdfCrrac6XaFfzNemRIs/PHNjsQ=',
            credentialsName: 'jimmy',
            type: 'bearer'
          }
        }
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('logging data: ', data);
      })
      .catch(err => {
        console.log('there was an error: ', err);
      });
  };

  transcribeAudio(testAudio);

  return (
    <>
      <div>Record</div>
      <audio controls src={testAudio}></audio>
    </>
  );
};
<audio></audio>;

export default Record;