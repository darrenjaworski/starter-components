import React from "react";
import "./Button.css";

function Button(props) {
  return <button className="btn">{props.children}</button>;
}

export default Button;
