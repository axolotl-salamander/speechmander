import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from '../components/ButtonComponent.jsx';
import Signup from '../components/signup.jsx';


const WelcomeContainer = () => {
  const activeState = useSelector((state) => state.audio.render);
  const dispatch = useDispatch();

  return (
    <>
    <div>
      <Signup/>
      </div>
      <div className="nav-container">
        <div className="logo">
          <h3>Speechr</h3>
          <svg className='logo-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
            <path fill="currentColor" d="M18 0H2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-4 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 14 4zM6 4a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 6 4zm4 8c-2.61 0-4.83-.67-5.65-3h11.3c-.82 2.33-3.04 3-5.65 3z"/>
          </svg>
        </div>
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
