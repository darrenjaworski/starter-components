import React from "react";

import "./Header.css";

function Header(props) {
  return <header className="app-header">{props.children}</header>;
}

export default Header;
