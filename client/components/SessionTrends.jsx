import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SessionTrends = ({ dataArr, name }) => {
  const data = {
    labels: ['session1', 'session2', 'session3'],
    datasets: [
      {
        label: name,
        data: [2, 4, 6],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SessionTrends;
