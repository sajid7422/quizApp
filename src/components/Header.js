import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header" style={{padding: "0px 40px"}}>
      <Link to="/" className="title">
        INTUITIVE QUIZ HUB
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header;
