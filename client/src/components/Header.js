import React from "react";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <button className="logo" onClick={props.handleHome}>
        <h1>MOVIES</h1>
      </button>
      <img
        className="user"
        src="/cat.gif"
        alt="user"
      />
    </div>
  );
};

export default Header;
