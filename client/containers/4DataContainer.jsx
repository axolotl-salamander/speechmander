import React, { useEffect } from 'react';
import ButtonComponent from '../components/ButtonComponent.jsx';
import CurrentSession from '../components/CurrentSession.jsx';
import SessionTrends from '../components/SessionTrends.jsx';
import { useDispatch, useSelector } from 'react-redux';

const DataContainer = () => {
  const { isLoggedIn, sessionData } = useSelector((state) => state.user);

  const currSession = sessionData[sessionData.length - 1];

  const wordCountTrends = [];
  const wordPerSec = [];
  const avgPauseDur = [];
  const totalPauses = [];

  for (let i = 0; i < sessionData.length; i++) {
    wordCountTrends.push(sessionData[i].wordCount);
    wordPerSec.push(sessionData[i].wordPerSec);
    avgPauseDur.push(sessionData[i].averagePauseDuration);
    totalPauses.push(sessionData[i].totalPauses);
  }

  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch()
  // });
  return (
    <>
      <CurrentSession />
      <SessionTrends
        wordCountTrends={wordCountTrends}
        wordPerSec={wordPerSec}
        avgPauseDur={avgPauseDur}
        totalPauses={totalPauses}
      />
      <ButtonComponent to="/record" btnText="Record Again!" />
    </>
  );
};

export default DataContainer;
