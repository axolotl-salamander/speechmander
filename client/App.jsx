import React, { useEffect } from 'react';
import MainContainer from './containers/0MainContainer.jsx';
import Record from './components/Record.jsx';

const App = ({ store }) => {
  return (
    <>
      <div>
        <div>Hello world!</div>
        <Record />
        <MainContainer />
      </div>
    </>
  );
};

export default App;
