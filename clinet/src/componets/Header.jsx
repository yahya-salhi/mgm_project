import React from "react";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="conatainer">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>MGMT</div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
