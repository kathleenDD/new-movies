import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => {

  return (
    <div className="header">
    <Link to="/movies">
        <h1>MEH</h1>
    </Link>
    <Link to="/random">
      <img
        className="user"
        src="/cat.gif"
        alt="user"
      />
    </Link>
    </div>
  );
};

export default Header;
