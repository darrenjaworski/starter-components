import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Indicator from "./Indicator";

import "./ListItem.css";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: undefined
    };
  }

  handleDeny() {
    this.setState({ status: "denied" });
  }

  handleApprove() {
    this.setState({ status: "approved" });
  }

  render() {
    return (
      <div className="list-item">
        <div className="list-item__flex">
          <Indicator status={this.state.status} />
          <img
            className="list-item__photo"
            src={this.props.photo}
            alt={`${this.props.name}`}
          />
          <div className="list-item__center">
            <div className="list-item__name">{this.props.name}</div>
            <div>{this.props.hours} Hours Requested</div>
            <div>{this.props.type}</div>
          </div>
          <div className="list-item__right">
            <div>{this.props.date}</div>
            <div>
              {this.props.total}
              Net Available
            </div>
          </div>
        </div>
        <div className="list-item__action">
          <Button onClick={this.handleDeny.bind(this)}>Deny</Button>
          <Button onClick={this.handleApprove.bind(this)}>Approve</Button>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  hours: PropTypes.number,
  type: PropTypes.string,
  date: PropTypes.string,
  total: PropTypes.number
};

ListItem.defaultProps = {
  photo: "https://placekitten.com/300/300",
  name: "Mrs. Kitten",
  hours: 8,
  type: "Vacation",
  date: "Sep. 18th",
  total: 20
};

export default ListItem;
