import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainContainer from './containers/0MainContainer.jsx';
import Record from './components/Record.jsx';
import WelcomeContainer from './containers/1welcome.jsx';
import PlayContainer from './containers/2.3playContainer.jsx';
import DataContainer from './containers/4DataContainer.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomeContainer />} />
        <Route exact path="/record" element={<PlayContainer />} />
        <Route exact path="/results" element={<DataContainer />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
    // <>
    //   {/* <div>
    //     <div>Hello world!</div>
    //     <Record />
    //     <MainContainer />
    //   </div> */}
    // </>
  );
};

export default App;
