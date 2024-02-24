// start button
// play button
// stop button
// reload button
import React, { useEffect, useState } from "react";
import store from "../store";

const ButtonComponent = () => {
  // const [state, setState] = useState([initialState]);
  // useEffect(() => {
  //   return () => {};
  // }, [store]);
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
