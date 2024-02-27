import React, { useEffect } from 'react';
import ButtonComponent from '../components/ButtonComponent.jsx';
import CurrentSession from '../components/CurrentSession.jsx';
import SessionTrends from '../components/SessionTrends.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <div className="data-container">
        <CurrentSession className='curr-session-div' currSession={currSession} />
        <h1 className='results-header'>Session Trends</h1>
        <SessionTrends dataArr={wordCountTrends} title="wordCountTrends" />
        <SessionTrends dataArr={wordPerSec} title="wordPerSec" />
        <SessionTrends dataArr={avgPauseDur} title="avgPauseDur" />
        <SessionTrends dataArr={totalPauses} title="totalPauses" />
        <ButtonComponent className='record-again-btn' to='/record' btnText='Record again!' />
      </div>
      {/* <Link to="/record">
        <button className="record-btn data-container-btn">Record Again!</button>
      </Link> */}
    </>
  );
};

export default DataContainer;
