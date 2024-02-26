import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setRender } from '../slice';
import ButtonComponent from '../components/ButtonComponent.jsx';


const WelcomeContainer = () => {
  const activeState = useSelector((state) => state.audio.render);
  const dispatch = useDispatch();

  return (
    <>
      <p>Welcome container works!</p>
      <ButtonComponent to='/record' btnText='Start!' />
      {/* <button id='startBtn' onClick={() => dispatch(setRender(2))}>Start!</button> */}
    </>
  //     <div>
  //         {/* // <h1>: welcome
  // // <div>: some text
  // // <div>: start button */}
  //     </div>
  );
};

export default WelcomeContainer;