import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from '../components/ButtonComponent.jsx';


const WelcomeContainer = () => {
  const activeState = useSelector((state) => state.audio.render);
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav-container">
        <h3>Speechr</h3>
      </div>

      <div className="hero-container">
        <h1>Your speech teacher.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor consequatur dolorem dicta, quod fugiat ullam quo maiores, est magni laborum vel soluta ipsum. Molestias, asperiores! Impedit cupiditate eum eius?</p>
        <ButtonComponent to='/record' btnText='Start!' />
      </div>
    </>
  );
};

export default WelcomeContainer;