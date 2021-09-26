import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
    <Link to="/movies">
      <button className="logo" onClick={props.handleHome}>
        <h1>MEH</h1>
      </button>
    </Link>
      <img
        className="user"
        src="/cat.gif"
        alt="user"
      />
    </div>
  );
};

export default Header;
