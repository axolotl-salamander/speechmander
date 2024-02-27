//houses the actual render containers

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WelcomeContainer from './1welcome.jsx';
import PlayContainer from './2.3playContainer.jsx';
// import DataContainer from './4dataContainer.jsx';

const MainContainer = () => {
  const currentState = useSelector((state) => state.audio.render);

  return (
    <>
      <WelcomeContainer />
    </>
  );
};

export default MainContainer;