import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

const SessionTrends = ({ dataArr, title }) => {
  // const data = {
  //   labels: ['session1', 'session2', 'session3'],
  //   datasets: [
  //     {
  //       label: name,
  //       data: [2, 4, 6],
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     },
  //   ],
  // };

  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  return (
    <div>
      {dataArr.length !== 0 ? (
        <>
          <p>
            {title}: {dataArr}
          </p>
        </>
      ) : (
        <p>{title}: Data Loading...</p>
      )}
    </div>
  );
};

export default SessionTrends;
