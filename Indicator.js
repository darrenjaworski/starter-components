import React from "react";

import "./Indicator.css";

function Indicator(props) {
  let statusClass = "indicator indicator--";
  switch (props.status) {
    case "denied":
      statusClass += "denied";
      break;
    case "approved":
      statusClass += "approved";
      break;
    default:
      statusClass += "default";
      break;
  }
  return <div className={statusClass} />;
}

export default Indicator;
