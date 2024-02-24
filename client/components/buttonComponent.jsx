// start button
// play button
// stop button
// reload button
import React, { useEffect, useState } from "react";

const ButtonComponent = () => {
  const [state, setState] = useState([initialState]);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <div>
      <button>{/* {start button} */}</button>
      <button>{/* {play button} */}</button>
      <button>{/* {stop button} */}</button>
      <button>{/* {reload button} */}</button>
    </div>
  );
};

export default ButtonComponent;
