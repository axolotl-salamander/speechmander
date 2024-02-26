import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from '../components/ButtonComponent.jsx';


const WelcomeContainer = () => {
  const activeState = useSelector((state) => state.audio.render);
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h3>Speechr</h3>
          <svg className='logo-icon' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1664 1664">
            <path fill="currentColor" d="M1664 832q0 203-66.5 386.5T1391 1517q-24 19-47 19q-26 0-45-19t-19-45q0-32 31-55q80-58 133-163.5t72.5-209.5t19.5-212t-19.5-212t-72.5-209.5T1311 247q-31-23-31-55q0-26 19-45t45-19q23 0 47 19q140 115 206.5 298.5T1664 832zm-256 0q0-161-51.5-309.5T1198 275q-21-19-46-19q-26 0-45 19t-19 45q0 31 29 54q82 67 122.5 198.5T1280 832t-40.5 259.5T1117 1290q-29 23-29 54q0 26 19 45t45 19q25 0 46-19q107-99 158.5-247.5T1408 832zm-448 448q-26 0-45-19t-19-45q0-24 17-43q111-130 111-341q0-210-111-341q-17-19-17-43q0-26 19-45t45-19q27 0 48 21q72 75 108 192t36 235t-36 235t-108 192q-21 21-48 21zM64 128q-26 0-45-19T0 64t19-45T64 0q121 0 226 41t182 126.5T575 371q18 66 49 100q23 26 96 62t97 65q7 9 11 21.5t4.5 19t0 25t-.5 21.5q0 26-13 48.5t-37.5 40t-47 29.5t-55.5 26l-96 37q5 20 22.5 57.5t28 71t5.5 59.5q-5 24-43 31q-49 16-154 17.5t-154-6.5q33 39 55 57q34 27 66 39t103 24q69 11 64 70q-9 95-82.5 140.5T320 1472q-19 0-32.5 8.5T268 1503t-9.5 31t-3 34t.5 32q0 26-19 45t-45 19t-45-19t-19-45v-64q0-82 56-137t136-55q34-1 74.5-11t41.5-31q-128-12-218-84t-90-194q0-33 26-50.5t59-10.5q92 21 215 19q44 0 66-7q-1-2-23.5-61T448 832q0-44 48-62q5-2 35-11t58-18t58-21.5t47.5-26.5t14.5-27q-4-10-45-29t-88.5-46t-65.5-53q-49-70-61-143q-15-72-51.5-123t-92-79.5T194 150T64 128z"/>
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