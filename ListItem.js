import React from "react";
import Button from "./Button";

import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <div className="list-item__flex">
        <img
          className="list-item__photo"
          src={props.photo}
          alt={`photo of ${props.name}`}
        />
        <div className="list-item__center">
          <div className="list-item__name">{props.name}</div>
          <div>{props.hours} Hours Requested</div>
          <div>{props.type}</div>
        </div>
        <div className="list-item__right">
          <div>{props.date}</div>
          <div>{props.total} Net Available</div>
        </div>
      </div>
      <div className="list-item__action">
        <Button>Deny</Button>
        <Button>Approve</Button>
      </div>
    </div>
  );
}

export default ListItem;
