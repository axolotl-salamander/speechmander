//houses the actual render containers

import React from 'react';
import WelcomeContainer from './1welcome.jsx';
import PlayContainer from './2.3playContainer.jsx';
import DataContainer from './4dataContainer.jsx';

const MainContainer = () => {
  return (
    <>
      <WelcomeContainer />
      <PlayContainer />
      <DataContainer />
    </>
  );
};

export default MainContainer;