import React from "react";
import "./styles.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <img src={logo} className="header-logo" />

        <ul className="header-list">
          <li className="header-item">INTRODUCTION</li>
          <li className="header-item">SOLUTION</li>
          <li className="header-item">RATE PLANT</li>
          <li className="header-item header-item--gn">LOGIN</li>
          <li className="header-item">APPLY FOR FREE USE</li>
        </ul>
      </div>

      <label htmlFor="topbar-menu-mobi-input" className="topbar-menu-mobi-1">
        <img
          className="topbar-menu-mobi-icon"
          src="https://img.icons8.com/color/48/000000/menu--v4.png"
        />
      </label>
      <input
        type="checkbox"
        id="topbar-menu-mobi-input"
        className="topbar-input"
      />
      <div className="topbar-menu-mobi-2">
        <ul className="menu-list-mobi">
          <li className="header-item">INTRODUCTION</li>
          <li className="header-item">SOLUTION</li>
          <li className="header-item">RATE PLANT</li>
          <li className="header-item ">LOGIN</li>
          <li className="header-item">APPLY FOR FREE USE</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
