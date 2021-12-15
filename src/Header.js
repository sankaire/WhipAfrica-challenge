import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="data:image/png;base64,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" />
      </div>
      <div className="header__right">
        <button className="btn">Login</button>
        <button className="btn1">Join</button>
      </div>
    </div>
  );
}

export default Header;
