import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = ({to, btnText}) => {

  return (
    <Link to={to}>
      <button className="btn-component-class">{btnText}</button>
    </Link>
  );
};

export default ButtonComponent;
