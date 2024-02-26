import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = ({to, btnText}) => {

  return (
    <Link to={to}>
      <button>{btnText}</button>
    </Link>
  );
};

export default ButtonComponent;
